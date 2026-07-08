#!/usr/bin/env node

/**
 * Set Vercel env for Web3Forms and redeploy production.
 *
 *   WEB3FORMS_ACCESS_KEY=xxxx node scripts/setup-email.mjs
 */

import { execSync, spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY

if (!accessKey) {
  console.error('Set WEB3FORMS_ACCESS_KEY (from https://web3forms.com)')
  process.exit(1)
}

function setEnv(name, value, env) {
  spawnSync('npx', ['vercel', 'env', 'rm', name, env, '--yes'], { cwd: ROOT, stdio: 'ignore' })
  const result = spawnSync('npx', ['vercel', 'env', 'add', name, env], {
    input: value,
    cwd: ROOT,
    encoding: 'utf8',
  })
  if (result.status === 0) console.log(`✓ ${name} (${env})`)
  else console.error(`✗ ${name} (${env})`, result.stderr || result.stdout)
}

for (const env of ['production', 'preview', 'development']) {
  setEnv('VITE_WEB3FORMS_ACCESS_KEY', accessKey, env)
}

execSync('npx vercel deploy --prod --yes', { stdio: 'inherit', cwd: ROOT })
console.log('Done: https://inspectsea.com.ua/contact')
