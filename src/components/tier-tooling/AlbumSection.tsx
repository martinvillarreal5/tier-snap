import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import SpotifyService from '@/service/spotifyService';
import { useTierStore } from '@/hooks/useTierStore';
import { SpotifyAlbumResponse } from '@/types/spotify';

export function AlbumSection() {
  const createItemInRow = useTierStore.use.createItemInRow();
  const [albumURL, setAlbumURL] = useState<string>('');
  const [album, setAlbum] = useState<SpotifyAlbumResponse>();

  const handleGenerateAlbumSongs = async () => {
    const album = await SpotifyService.getAlbumInfo(albumURL);
    setAlbum(album);

    album.tracks.items.forEach((track) =>
      createItemInRow({
        title: track.name,
        rowId: 'BAG',
      })
    );
  };

  return (
    <>
      {album?.images[2] && <img src={album?.images[0].url} className="size-64" />}
      {album && album.name.length > 0 && <h3 className="text-2xl text-white">{album.name}</h3>}
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
