import { useState, useEffect, useRef } from "react";
import { Music, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgMusic from "@/assets/audio.mp3";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioSrc = bgMusic;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Set a pleasant volume
    }

    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.log("Autoplay blocked. User must interact to play audio.");
      }
    };

    playAudio();
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <Button
        onClick={toggleMusic}
        variant="outline"
        size="icon"
        className={`w-12 h-12 rounded-full border-gold/50 bg-background/60 backdrop-blur-md shadow-gold transition-all duration-500 hover:scale-110 ${
          isPlaying ? "animate-pulse" : ""
        }`}
      >
        {isPlaying ? (
          <Music className="text-primary w-5 h-5 animate-slow-spin" />
        ) : (
          <Music2 className="text-muted-foreground w-5 h-5" />
        )}
      </Button>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
      />
    </div>
  );
};
