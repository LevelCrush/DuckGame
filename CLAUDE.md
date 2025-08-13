# Claude Development Context

This document contains important context and notes for AI assistants (particularly Claude) working on the Duck Game project.

## Project Overview

**Duck Game** is a browser-based clicking game where players hunt ducks within a 30-second time limit. The game features Discord integration for custom assets and is hosted on GitHub Pages.

🎮 **Live Game**: [https://levelcrush.github.io/DuckGame/](https://levelcrush.github.io/DuckGame/)

## Key Development Guidelines

### Lord Xol's Vision (Updated v2.0)
The game was created under the direction of "Lord Xol" with evolving requirements:

**Original Vision (v1.0):**
- Visceral feedback when ducks are eliminated (blood, feathers, smoke)
- Hit marker sound effects on successful clicks
- Bright red crosshair cursor when hovering over targets
- Integration with Discord assets for enhanced gameplay

**Infernal Expansion (v2.0):**
- Timer extensions (+30s per 15 ducks) for extended gameplay
- Discord hitmarker sound replacing generic beep
- Complete theme transformation to hellfire aesthetic
- Devil emojis replacing clouds
- Taco Bell celebration sound every 5 ducks
- Volume control for loud Discord sounds (default 20%)
- Massive flame wall covering bottom 20% of screen
- Divine spawn effects for bonus ducks (light rays, smoke, feathers)

**Maximum Chaos (v2.1):**
- Duck duplication on EVERY kill (not just every 5)
- Exponential growth formula: each kill spawns 2 more ducks
- Mathematical progression: 1→3→7→15→31→63→127...

**Eternal Chaos (v2.2):**
- Removed 3-second despawn timer completely
- Ducks now remain on screen forever until clicked
- Combined with exponential spawning for ultimate chaos
- Screen inevitably becomes overwhelmed with ducks

### Code Style Preferences
- Keep the game in a **single HTML file** for GitHub Pages deployment
- Use **Web Audio API** for fallback sounds
- Implement **visual effects** using CSS animations
- Maintain **simple, readable code** without unnecessary complexity

### Security Considerations
- **NEVER commit `.env` files** or Discord tokens to the repository
- The `.gitignore` is configured to exclude sensitive files
- Discord bot tokens and guild IDs must remain private
- Use Base64 encoding for assets when deploying to GitHub Pages

## Technical Architecture

### Core Components

1. **index.html** - Single-file game containing:
   - Game logic and state management
   - CSS animations for visual effects
   - Discord asset integration hooks

2. **discord-assets.js** - Module that:
   - Loads Discord emojis, stickers, and sounds
   - Provides fallback mechanisms
   - Manages asset selection and playback

3. **fetch-discord-assets.js** - Node script that:
   - Connects to Discord via bot token
   - Downloads server assets
   - Creates manifest files for web use

### Discord Integration Flow

```
1. Developer runs: npm install
2. Developer configures: .env file with Discord credentials
3. Developer fetches: npm run fetch (downloads Discord assets)
4. Game loads: discord-assets.js module on page load
5. Runtime: Game uses Discord sounds/images if available, falls back to defaults
```

### Asset Storage Strategy

- **Development**: Assets stored as files in `/emojis`, `/sounds`, `/stickers`
- **Production**: Assets embedded as Base64 in manifest.json files
- **Fallback**: Web Audio API and emoji characters when Discord assets unavailable

## Common Tasks

### Adding New Visual Effects
- Add CSS classes in the `<style>` section
- Create elements dynamically in JavaScript
- Use `setTimeout` to clean up DOM elements
- Example: `createSpawnEffect()` for bonus duck spawning

### Modifying Game Mechanics
- Game state variables are at the top of the `<script>` section
- `spawnDuck(x, y, showEffect)` controls duck creation and behavior
  - Now accepts position parameters for targeted spawning
  - `showEffect` boolean triggers spawn animations
- `startGame()` and `endGame()` manage game flow
- `ducksCaught` tracks total for bonuses separate from score

### Updating Discord Integration
- Modify `fetch-discord-assets.js` for fetching logic
- Update `discord-assets.js` for runtime usage
- Use `playSoundByName()` for specific sounds (hitmarker, tbell)
- Test with both Discord assets present and absent
- Volume parameter now propagates through all sound methods

### Managing Game Difficulty (v2.2 - Eternal Chaos)
- Duck spawn interval: 1000ms (1 second)
- Duck duplication: EVERY kill spawns 2 more (exponential growth)
- Duck despawn timer: REMOVED - ducks stay forever (v2.2)
- Taco Bell sound: Every 5 catches (celebration)
- Timer bonus triggers: Every 15 catches (+30 seconds)
- Volume default: 20% (adjustable via slider)
- Mathematical growth: 1 → 3 → 7 → 15 → 31 → 63 → 127 ducks...
- Screen overflow: Inevitable due to no despawning + exponential spawning

## Testing Checklist

When making changes, verify:
- [ ] Game works without Discord assets (fallback mode)
- [ ] Game works with Discord assets loaded
- [ ] No console errors in browser
- [ ] Visual effects render correctly
- [ ] Sounds play appropriately
- [ ] Score tracking functions properly
- [ ] Timer counts down correctly
- [ ] Game over screen displays

## Performance Considerations

- Limit DOM manipulation during gameplay
- Clean up event listeners and intervals
- Remove visual effect elements after animations
- Use CSS transforms over position changes
- Batch DOM updates when possible

## Recent Updates (v2.2)

### v2.2.0 - Eternal Chaos
- **Duck Persistence**: Removed 3-second despawn timer
- **Infinite Accumulation**: Ducks build up endlessly
- **Code Change**: Removed `setTimeout` for duck removal

### v2.1.0 - Maximum Chaos
- **Exponential Spawning**: Every kill creates 2 new ducks
- **Immediate Duplication**: No delay, instant multiplication
- **Chaos Mathematics**: Geometric progression of duck count

### v2.0.0 - Infernal Update
- **Volume Control**: Slider UI with 0-100% range
- **Infernal Theme**: Complete visual overhaul with fire and devils
- **Spawn Effects**: Multi-layered animation system for bonus ducks
- **Timer Extensions**: Reward system for skilled players
- **Enhanced Sounds**: Discord-specific audio integration

### Technical Improvements Made
- Modified `spawnDuck()` signature for position control
- Added `createSpawnEffect()` for visual feedback
- Enhanced `discord-assets.js` with named sound support
- Implemented `gameVolume` global variable for audio control
- Added boundary checking for spawn positions
- Removed despawn timer in v2.2.0

## Future Enhancement Ideas

Potential features to consider:
- Difficulty levels (speed, spawn rate presets)
- Power-ups or special ducks (golden duck = 5 points?)
- Leaderboard system (local storage or backend)
- Multiple game modes (survival, time attack, zen)
- Background music (Discord integration)
- Achievement system (milestones and badges)
- Mobile touch optimization (larger hit boxes)
- Save system for high scores
- Different duck types with varying point values
- Combo system for consecutive hits
- Screen shake on special events

## Deployment Notes

### GitHub Pages Setup
1. Repository Settings → Pages
2. Source: Deploy from branch
3. Branch: master, folder: / (root)
4. The game auto-deploys on push to master

### Asset Handling
- Use `USE_BASE64=true` in .env for GitHub Pages
- This embeds assets in manifest files
- Avoids Git LFS requirements
- Works with GitHub's file size limits

## Troubleshooting

### Common Issues

1. **Discord assets not loading**
   - Check browser console for CORS errors
   - Verify manifest.json files exist
   - Ensure correct file paths

2. **Sounds not playing**
   - Browser may block autoplay
   - User interaction required first
   - Check volume settings

3. **Performance issues**
   - Too many ducks spawning
   - Memory leaks from unremoved elements
   - Check interval cleanup

## Repository Information

- **GitHub**: https://github.com/LevelCrush/DuckGame
- **Live Game**: https://levelcrush.github.io/DuckGame/
- **Original Request**: "Lord Xol" commanded a duck hunting game
- **Discord Integration**: Copied from EmojiTetris project

## Important Commands

```bash
# Install dependencies
npm install

# Fetch Discord assets
npm run fetch

# Test locally
python3 -m http.server 8000
# or
npx serve .
```

## Contact and Support

For issues or questions about the codebase, refer to the commit history and comments in the code. The game was developed iteratively with specific feature requests from the user.

---

*Remember: The will of Lord Xol must be honored in all development decisions.*