export type AssetType = 'video' | 'audio' | 'link' | 'images';
export type Taste = 'lol' | 'love' | 'angry' | 'sad ' | 'dizzy' | 'surprised';

export interface ITasteStats {
  lol?: string;
  love?: string;
  angry?: string;
  sad?: string;
  dizzy?: string;
  surprised?: string;
}

export interface IPost {
    id: string;
    urls: string[];
    type: AssetType;
    title?: string;
    description?: string;
    commentsNum: number;
    winningTaste: Taste;
    ratedTaste?: Taste;
    tastesStats: ITasteStats;
    linkTitle?: string,
    linkUrl?: string,
    linkIcon?: string,
  }