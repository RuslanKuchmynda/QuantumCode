#!/bin/sh
echo "Running ESLint and Prettier..."

# Для папки frontend
eslint_output=$(npx eslint ../../apps/frontend/src/*.{ts,tsx} --config ../../apps/frontend/eslint.config.js --max-warnings=0)
eslint_status=$?

# Для папки backend
backend_output=$(npx eslint ../../apps/backend/src/**.ts --config ../../apps/backend/eslint.config.mjs --max-warnings=0)
backend_status=$?

# Форматування Prettier
prettier_output=$(npx prettier --write "../../apps/frontend/src/*.{js,ts,jsx,tsx}" "../../apps/backend/src/**/*.ts")
prettier_status=$?

# Якщо є помилки у будь-якому з процесів
if [ $eslint_status -ne 0 ] || [ $backend_status -ne 0 ] || [ $prettier_status -ne 0 ]; then
  echo "❌ ESLint and/or Prettier found issues. Please fix them before committing."

  # Вивести помилки з ESLint для frontend
  if [ $eslint_status -ne 0 ]; then
    echo "$eslint_output"
  fi

  # Вивести помилки з ESLint для backend
  if [ $backend_status -ne 0 ]; then
    echo "$backend_output"
  fi

  # Вивести помилки з Prettier
  if [ $prettier_status -ne 0 ]; then
    echo "$prettier_output"
  fi

  exit 1
fi

echo "✅ Everything is fine, no ESLint or Prettier errors found!"
