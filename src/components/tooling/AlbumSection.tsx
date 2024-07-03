import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import SpotifyService from '@/service/spotifyService';
import { useTierStore } from '@/hooks/useTierStore';

export function AlbumSection() {
  const createItemInRow = useTierStore.use.createItemInRow();
  const [albumURL, setAlbumURL] = useState<string>('');
  const [albumTitle, setAlbumTitle] = useState<string>('');

  const handleGenerateAlbumSongs = async () => {
    const album = await SpotifyService.getAlbumInfo(albumURL);
    setAlbumTitle(album.name);

    album.tracks.items.forEach((track) =>
      createItemInRow({
        title: track.name,
        rowId: 'BAG',
      })
    );
  };

  return (
    <>
      {albumTitle.length > 0 && <h3 className="text-2xl text-white">{albumTitle}</h3>}
      <Input
        placeholder="Spotify album link here"
        type="text"
        value={albumURL}
        onChange={(e) => setAlbumURL(e.target.value)}
      />
      <Button onClick={() => void handleGenerateAlbumSongs()}>Generate Songs</Button>
    </>
  );
}
