// Discord Assets Integration for Duck Game
// This module loads and manages Discord emojis, stickers, and sounds

class DiscordAssets {
    constructor() {
        this.emojis = [];
        this.sounds = [];
        this.stickers = [];
        this.loaded = false;
    }

    async loadAssets() {
        try {
            // Load emoji manifest
            const emojiResponse = await fetch('emojis/manifest.json');
            if (emojiResponse.ok) {
                const emojiData = await emojiResponse.json();
                this.emojis = emojiData.emojis || [];
                console.log(`Loaded ${this.emojis.length} Discord emojis`);
            }

            // Load sound manifest
            const soundResponse = await fetch('sounds/manifest.json');
            if (soundResponse.ok) {
                const soundData = await soundResponse.json();
                this.sounds = soundData.sounds || [];
                console.log(`Loaded ${this.sounds.length} Discord sounds`);
            }

            // Load sticker manifest
            const stickerResponse = await fetch('stickers/manifest.json');
            if (stickerResponse.ok) {
                const stickerData = await stickerResponse.json();
                this.stickers = stickerData.stickers || [];
                console.log(`Loaded ${this.stickers.length} Discord stickers`);
            }

            this.loaded = true;
            return true;
        } catch (error) {
            console.error('Failed to load Discord assets:', error);
            return false;
        }
    }

    getRandomEmoji() {
        if (this.emojis.length === 0) return '🦆';
        const emoji = this.emojis[Math.floor(Math.random() * this.emojis.length)];
        return emoji.dataUrl || `emojis/${emoji.filename}`;
    }

    getRandomSound() {
        if (this.sounds.length === 0) return null;
        const sound = this.sounds[Math.floor(Math.random() * this.sounds.length)];
        return sound.dataUrl || `sounds/${sound.filename}`;
    }

    getRandomSticker() {
        if (this.stickers.length === 0) return null;
        const sticker = this.stickers[Math.floor(Math.random() * this.stickers.length)];
        return sticker.dataUrl || `stickers/${sticker.filename}`;
    }

    // Get a specific sound by name
    getSoundByName(name) {
        const sound = this.sounds.find(s => s.name === name);
        if (!sound) return null;
        return sound.dataUrl || `sounds/${sound.filename}`;
    }

    // Play a specific sound by name
    playSoundByName(name, volume = 0.3) {
        const soundPath = this.getSoundByName(name);
        if (!soundPath) {
            console.warn(`Sound "${name}" not found`);
            this.playFallbackSound();
            return;
        }

        const audio = new Audio(soundPath);
        audio.volume = volume;
        audio.play().catch(err => {
            console.error(`Failed to play sound "${name}":`, err);
            this.playFallbackSound();
        });
    }

    // Play a random Discord sound effect
    playRandomSound(volume = 0.3) {
        const soundPath = this.getRandomSound();
        if (!soundPath) {
            // Fallback to Web Audio API hit sound if no Discord sounds available
            this.playFallbackSound();
            return;
        }

        const audio = new Audio(soundPath);
        audio.volume = volume;
        audio.play().catch(err => {
            console.error('Failed to play sound:', err);
            this.playFallbackSound();
        });
    }

    // Fallback sound using Web Audio API (original hit sound)
    playFallbackSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }

    // Create an image element from emoji/sticker
    createImageElement(src, className = '') {
        if (src.startsWith('data:')) {
            // Base64 data URL
            const img = document.createElement('img');
            img.src = src;
            img.className = className;
            return img;
        } else {
            // File path
            const img = document.createElement('img');
            img.src = src;
            img.className = className;
            return img;
        }
    }
}

// Export for use in the game
window.discordAssets = new DiscordAssets();