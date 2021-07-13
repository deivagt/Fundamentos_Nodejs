const sharp = require('sharp')

sharp('original.png').grayscale().toFile('resized.png')