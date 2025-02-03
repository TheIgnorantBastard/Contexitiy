#!/bin/bash

# Set backup directory
BACKUP_DIR="$(pwd)/backups"
mkdir -p "$BACKUP_DIR"

# Timestamp
TIMESTAMP=$(date +%Y-%m-%d_%H-%M-%S)

echo "Starting backup process..."

# Backup Weaviate
echo "Backing up Weaviate..."
docker run --rm -v docker_weaviate_data:/data -v "$BACKUP_DIR":/backup busybox tar czf /backup/weaviate-$TIMESTAMP.tar.gz /data

# Backup Neo4j
echo "Backing up Neo4j..."
docker run --rm -v docker_neo4j_data:/data -v "$BACKUP_DIR":/backup busybox tar czf /backup/neo4j-$TIMESTAMP.tar.gz /data

echo "Backup completed. Files saved in: $BACKUP_DIR"
