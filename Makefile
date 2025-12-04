NODE_VERSION := 20.11.1
NODE_DIR     := $(CURDIR)/.node
NODE_DIST    := node-v$(NODE_VERSION)-linux-x64
NODE_BIN     := $(NODE_DIR)/$(NODE_DIST)/bin
PROJECT_DIR  := app

.PHONY: env node project deps dev build clean-node

env: node project deps
	@echo "Environment is ready."

node:
	@mkdir -p "$(NODE_DIR)"
	@if [ -x "$(NODE_BIN)/node" ]; then \
		echo "Node.js $(NODE_VERSION) already installed at $(NODE_BIN); skipping download."; \
	else \
		echo "Downloading Node.js $(NODE_VERSION) ..."; \
		curl -fsSL "https://nodejs.org/dist/v$(NODE_VERSION)/$(NODE_DIST).tar.xz" -o "$(NODE_DIR)/node.tar.xz"; \
		echo "Extracting Node.js $(NODE_VERSION) ..."; \
		tar -xJf "$(NODE_DIR)/node.tar.xz" -C "$(NODE_DIR)"; \
		rm -f "$(NODE_DIR)/node.tar.xz"; \
		echo "Node.js $(NODE_VERSION) installed under $(NODE_DIR)/$(NODE_DIST)"; \
	fi

project: node
	@if [ -f "$(PROJECT_DIR)/package.json" ]; then \
		echo "Project already initialized in $(PROJECT_DIR); skipping create-next-app."; \
	else \
		echo "Initializing Next.js project in $(PROJECT_DIR) with create-next-app (non-interactive, skip install) ..."; \
		mkdir -p "$(PROJECT_DIR)"; \
		PATH="$(NODE_BIN):$$PATH" npx create-next-app@latest "$(PROJECT_DIR)" --yes --skip-install; \
	fi

deps: node project
	@if [ ! -f "$(PROJECT_DIR)/package.json" ]; then \
		echo "Error: $(PROJECT_DIR)/package.json not found. create-next-app may have failed."; \
		exit 1; \
	fi
	@if [ -f "$(PROJECT_DIR)/package-lock.json" ]; then \
		echo "package-lock.json found; running npm ci in $(PROJECT_DIR) ..."; \
		cd "$(PROJECT_DIR)" && PATH="$(NODE_BIN):$$PATH" npm ci; \
	else \
		echo "package-lock.json not found; running npm install in $(PROJECT_DIR) ..."; \
		cd "$(PROJECT_DIR)" && PATH="$(NODE_BIN):$$PATH" npm install; \
	fi

dev: node project
	@echo "Starting Next.js dev server on 127.0.0.1:3001 ..."
	@cd "$(PROJECT_DIR)" && PATH="$(NODE_BIN):$$PATH" npm run dev -- --hostname 127.0.0.1 --port 3001

build: node project
	@echo "Building Next.js app ..."
	@cd "$(PROJECT_DIR)" && PATH="$(NODE_BIN):$$PATH" npm run build

clean-node:
	@echo "Removing local Node installation at $(NODE_DIR) ..."
	@rm -rf "$(NODE_DIR)"
