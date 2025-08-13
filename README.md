# 🦆 Duck Game

A fast-paced duck hunting game with Discord integration for custom assets and sound effects.

🎮 **[Play Now on GitHub Pages](https://levelcrush.github.io/DuckGame/)**

## Features

- **30-Second Challenge**: Click as many ducks as you can before time runs out
- **Visual Effects**: Blood splatter, feathers, and smoke effects on successful hits
- **Custom Sounds**: Integrated with Discord soundboard for dynamic sound effects
- **Red Crosshair**: Enhanced targeting system with bright red cursor on hover
- **Discord Assets**: Supports custom emojis, stickers, and sounds from your Discord server

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

## Credits

Created by Lord Xol's command and implemented with the assistance of Claude.

## License

Open source - feel free to modify and share!