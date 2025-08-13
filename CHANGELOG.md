# Changelog

All notable changes to the Duck Game project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2024-08-13

### 🔥 The Infernal Update - Lord Xol's Vision Realized

#### Added
- **Volume Control System**
  - Volume slider (0-100%) in top-right corner with speaker emoji
  - Default volume set to 20% for Discord sounds
  - Real-time volume adjustment for all sound effects
  - Volume persistence throughout gameplay

- **Divine Spawn Effects**
  - Smoke puff animation when bonus ducks spawn
  - 6-feather burst effect in circular pattern
  - 8 golden light rays radiating from spawn point
  - 1.5-second animated sequence with auto-cleanup

- **Infernal Theme Transformation**
  - Red gradient background with fire glow animation
  - 4 rows of animated flames covering bottom 20% of screen
  - 42 total flame emojis with varying sizes and opacity
  - Devil emojis replacing peaceful clouds
  - Animated flickering effects on all flames

- **Enhanced Gameplay Mechanics**
  - Timer extension: +30 seconds for every 15 ducks caught
  - Duck duplication: 2 bonus ducks spawn every 5 catches
  - Bonus ducks spawn near killed duck's position (±75px)
  - Timer flashes green when bonus time awarded
  - Taco Bell celebration sound every 5 ducks

- **Discord Integration Features**
  - Specific sound fetching by name (hitmarker, tbell)
  - Enhanced playSoundByName() method
  - Volume parameter support across all audio methods
  - Fallback sound system with volume control

#### Changed
- Background changed from blue sky to fiery red inferno
- Clouds replaced with floating devil emojis
- Hit sound changed to Discord hitmarker effect
- Default game volume reduced from 30% to 20%
- Spawn system modified to accept position parameters

#### Technical Improvements
- Modified `spawnDuck()` to accept x/y coordinates and effect flag
- Added `createSpawnEffect()` for visual effect generation
- Enhanced `discord-assets.js` with specific sound methods
- Volume propagation through all sound playback methods
- Boundary checking for spawn positions

## [1.1.0] - 2024-08-13

### Discord Assets Integration

#### Added
- **Discord Bot Integration**
  - Fetch emojis, stickers, and sounds from Discord servers
  - Base64 encoding support for GitHub Pages
  - Manifest files for asset management
  - Automatic asset loading on game start

- **Enhanced Audio System**
  - Discord sound effects support
  - Dynamic sound loading from manifests
  - Fallback to Web Audio API when Discord unavailable

- **Documentation**
  - README.md with setup instructions
  - CLAUDE.md for AI development context
  - GitHub Pages deployment guide

#### Security
- .gitignore configuration for sensitive files
- Environment variable protection (.env files)
- No Discord tokens in repository

## [1.0.0] - 2024-08-13

### Initial Release - The Original Hunt

#### Features
- **Core Gameplay**
  - 30-second duck hunting challenge
  - Click-based shooting mechanics
  - Score tracking system
  - Game over screen with replay option

- **Visual Effects**
  - Blood splatter on duck elimination
  - Feather explosion effects (6 directional)
  - Smoke puff on impact
  - Red crosshair cursor on hover
  - Animated clouds

- **Audio**
  - Web Audio API hit marker sound
  - Adjustable beep frequency effect

- **Technical**
  - Single HTML file deployment
  - GitHub Pages compatible
  - No build process required
  - Pure HTML/CSS/JavaScript

## Version History

- **v2.0.0** - Infernal Update with volume control and spawn effects
- **v1.1.0** - Discord integration and asset management
- **v1.0.0** - Initial release with core gameplay

---

*"The will of Lord Xol has been honored in all development decisions."*