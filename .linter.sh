#!/bin/bash
cd /home/kavia/workspace/code-generation/plantify-ai-32774-a3a827af/plantify_ai
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

