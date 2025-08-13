# 🦆 Duck Game

A fast-paced duck hunting game with Discord integration for custom assets and sound effects.

🎮 **[Play Now on GitHub Pages](https://levelcrush.github.io/DuckGame/)**

## 🔥 Features (v2.0 - The Infernal Update)

### Core Gameplay
- **Dynamic Timer**: Starts at 30 seconds, +30 bonus seconds per 15 ducks caught
- **Duck Multiplication**: Every 5 ducks caught spawns 2 bonus ducks with divine effects
- **Score Tracking**: Real-time score display with visual feedback
- **Progressive Difficulty**: Exponential challenge increase through duck duplication

### Visual Effects
- **Infernal Theme**: Animated red gradient background with fire glow
- **Wall of Flames**: 42 flame emojis across 4 rows (bottom 20% of screen)
- **Devil Clouds**: Floating devil emojis replacing peaceful clouds
- **Kill Effects**: Blood splatter, 6-directional feathers, smoke puffs
- **Spawn Effects**: Divine light rays, smoke bursts, and feather explosions
- **Red Crosshair**: Bright targeting reticle when hovering over ducks

### Audio System
- **Volume Control**: Adjustable slider (0-100%, default 20%)
- **Discord Sounds**: Hitmarker and Taco Bell celebration effects
- **Smart Fallback**: Web Audio API backup when Discord unavailable
- **Celebration Audio**: Special sound every 5 ducks caught

### Discord Integration
- **Custom Assets**: Use your server's emojis, stickers, and soundboard
- **Base64 Support**: Works seamlessly with GitHub Pages
- **Automatic Loading**: Assets load on game start

## Quick Start

### Playing the Game

Simply visit **[https://levelcrush.github.io/DuckGame/](https://levelcrush.github.io/DuckGame/)** to play instantly in your browser.

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/LevelCrush/DuckGame.git
cd DuckGame
```

2. Open `index.html` in your browser to play locally

## Discord Integration Setup (Optional)

The game can use custom assets from your Discord server for enhanced gameplay.

### Prerequisites

1. A Discord Bot Token
2. Your Discord Server (Guild) ID
3. Node.js installed

### Setup Steps

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with your Discord credentials:
```env
DISCORD_BOT_TOKEN=your_bot_token_here
DISCORD_GUILD_ID=your_guild_id_here
USE_BASE64=true  # Set to true for GitHub Pages compatibility
```

3. Fetch Discord assets:
```bash
npm run fetch
```

This will download:
- Custom emojis from your server
- Soundboard sounds 
- Server stickers

### Bot Permissions

Your Discord bot needs to be invited to your server with the following permissions:
- Read Messages
- View Channels
- Use External Emojis

Invite link format:
```
https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_CLIENT_ID&permissions=1073741824&scope=bot
```

## Game Controls

- **Click** on ducks to eliminate them
- Ducks spawn randomly and move around the screen
- Each duck disappears after 3 seconds if not clicked
- Score as many points as possible in 30 seconds

## Technical Details

- **Pure HTML/CSS/JavaScript** - No build process required
- **Discord.js Integration** - Fetches assets from Discord servers
- **Web Audio API** - Fallback sound generation
- **GitHub Pages Ready** - Single HTML file deployment
- **Base64 Asset Support** - Works without Git LFS

## Project Structure

```
duck-game/
├── index.html          # Main game file
├── discord-assets.js   # Discord integration module
├── fetch-discord-assets.js  # Asset fetching script
├── package.json        # Node dependencies
├── .env               # Discord credentials (not committed)
├── .gitignore         # Git ignore rules
├── emojis/            # Discord emojis (generated)
├── sounds/            # Discord sounds (generated)
└── stickers/          # Discord stickers (generated)
```

## Contributing

Feel free to submit issues and pull requests! The game is designed to be simple and extensible.

## What's New in v2.0

- 🔊 **Volume Control** - Adjustable sound levels with visual slider
- 🔥 **Infernal Theme** - Complete hellfire visual overhaul
- 🦆 **Duck Duplication** - Bonus spawns every 5 catches
- ⏱️ **Timer Extensions** - Earn more time by catching ducks
- ✨ **Spawn Effects** - Divine light and feather explosions
- 😈 **Devil Clouds** - Demonic atmosphere enhancements
- 🔥 **Wall of Flames** - Multi-layered fire effects

See [CHANGELOG.md](CHANGELOG.md) for complete version history.

## Game Mechanics

### Scoring System
- Each duck caught = 1 point
- No score penalties for misses
- Final score displayed at game over

### Bonus Mechanics
- **Every 5 ducks**: Taco Bell sound + 2 bonus ducks spawn
- **Every 15 ducks**: +30 seconds added to timer (green flash)
- **Spawn Position**: Bonus ducks appear near the eliminated duck

### Visual Feedback
- Timer flashes green when time bonus awarded
- Spawn effects indicate bonus duck arrival
- Kill effects confirm successful hits

## Credits

Created under the divine command of **Lord Xol** and implemented with the assistance of Claude.

Special thanks to the Discord community for providing the epic sound effects.

## License

Open source - feel free to modify and share!

---

*"The will of Lord Xol has been honored in all development decisions."*