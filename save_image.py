#!/usr/bin/env python3
"""
Script to help save the hero background image.
Place your image file in the same directory as this script and rename it to 'hero-bg.jpg'
Then run: python save_image.py
"""

import shutil
import os

source = input("Enter the full path to your downloaded image file: ").strip()

if os.path.exists(source):
    dest = os.path.join(os.path.dirname(__file__), 'public', 'assets', 'hero-bg.jpg')
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    shutil.copy(source, dest)
    print(f"✓ Image saved to: {dest}")
else:
    print(f"✗ File not found: {source}")
