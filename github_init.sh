#!/bin/bash

# Initialize a new Git repository
git init

# Rename the default branch to 'main'
git branch -M main

# Add a remote repository named 'origin'
git remote add origin https://github.com/kenth9p3/mlthsc-thesis.git

# Add .gitignore file
git add .gitignore

# Add .gitattributes file
git add .gitattributes

# Commit the changes with message "git"
git commit -m "git"

# Push the changes to the remote 'main' branch and set upstream
git push -u origin main

# Add the ./models directory
git add ./models

# Commit the changes in ./models with message "model"
git commit -m "model"

# Push the changes to the remote 'main' branch and set upstream
git push -u origin main
