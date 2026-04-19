export type YoutubeInfo = {
  link: string;
  image: string;
};

export const YOUTUBE_LIST: YoutubeInfo[] = [
  {
    link: "https://www.youtube.com/watch?v=x0FwbTiD3iA",
    image: "https://i.ytimg.com/vi/x0FwbTiD3iA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCXpsz5U_R2FuqslxeX8wrYa6UGbQ",
  }
];

export type AlbumItem = {
  albumImage: string;
  albumLink: string;
  albumName: string;
  albumDate: string;
  label: string;
};

export const ALBUM_ITEMS: AlbumItem[] = [
  { albumImage: "/picture/albums/album_1.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=40", albumName: "IT’z Different", albumDate: "2019-02-12", label: "1" },
  { albumImage: "/picture/albums/album_2.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=39", albumName: "IT’z ICY", albumDate: "2019-07-29", label: "2" },
  { albumImage: "/picture/albums/album_3.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=38", albumName: "IT’z ME", albumDate: "2020-03-09", label: "3" },
  { albumImage: "/picture/albums/album_4.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=37", albumName: "Not Shy", albumDate: "2020-08-17", label: "4" },
  { albumImage: "/picture/albums/album_5.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=35", albumName: "믿지 (MIDZY)", albumDate: "2021-03-20", label: "5" },
  { albumImage: "/picture/albums/album_6.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=34", albumName: "GUESS WHO", albumDate: "2021-04-30", label: "6" },
  { albumImage: "/picture/albums/album_7.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=32", albumName: "CRAZY IN LOVE", albumDate: "2021-09-24", label: "7" },
  { albumImage: "/picture/albums/album_8.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=31", albumName: "CHECKMATE", albumDate: "2022-07-15", label: "8" },
  { albumImage: "/picture/albums/album_9.png", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=30", albumName: "Boys Like You", albumDate: "2022-10-21", label: "9" },
  { albumImage: "/picture/albums/album_10.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=29", albumName: "CHESHIRE", albumDate: "2022-11-30", label: "10" },
  { albumImage: "/picture/albums/album_11.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=28", albumName: "KILL MY DOUBT", albumDate: "2023-07-31", label: "11" },
  { albumImage: "/picture/albums/album_12.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=27", albumName: "BORN TO BE", albumDate: "2024-01-08", label: "12" },
  { albumImage: "/picture/albums/album_13.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=26", albumName: "GOLD", albumDate: "2024-10-15", label: "13" },
  { albumImage: "/picture/albums/album_14.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=25", albumName: "AIR", albumDate: "2025-03-10", label: "14" },
  { albumImage: "/picture/albums/album_15.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=24", albumName: "GWBG", albumDate: "2025-06-09", label: "15" },
  { albumImage: "/picture/albums/album_16.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=23", albumName: "TUNNEL VISION", albumDate: "2025-11-10", label: "16" },
  { albumImage: "/picture/albums/album_17.jpg", albumLink: "https://itzy.jype.com/Default/DiscographyView?AamSeq=266", albumName: "Ice Cream", albumDate: "2026-03-23", label: "17" },
];

export type MemberProfile = {
  name: string;
  nameKr: string;
  birth: string;
  image: string;
  sign: string;
  instagram: string;
  layout?: "left" | "right";
};

export const MEMBER_PROFILES: MemberProfile[] = [
  {
    name: "YEJI",
    nameKr: "예지",
    birth: "2000.05.26",
    image: "/picture/sign/member1.jpg",
    sign: "/picture/sign/sign1.png",
    instagram: "https://www.instagram.com/yezyizhere/",
    layout: "left",
  },
  {
    name: "LIA",
    nameKr: "리아",
    birth: "2000.07.21",
    image: "/picture/sign/member2.jpg",
    sign: "/picture/sign/sign2.png",
    instagram: "https://www.instagram.com/lia_loves___/",
    layout: "right",
  },
  {
    name: "RYUJIN",
    nameKr: "류진",
    birth: "2001.04.17",
    image: "/picture/sign/member3.jpg",
    sign: "/picture/sign/sign3.png",
    instagram: "https://www.instagram.com/iamfinethankyouandryu/",
    layout: "left",
  },
  {
    name: "CHAERYEONG",
    nameKr: "채령",
    birth: "2001.06.05",
    image: "/picture/sign/member4.jpg",
    sign: "/picture/sign/sign4.png",
    instagram: "https://www.instagram.com/chaerrry0/",
    layout: "right",
  },
  {
    name: "YUNA",
    nameKr: "유나",
    birth: "2003.12.09",
    image: "/picture/sign/member5.jpg",
    sign: "/picture/sign/sign5.png",
    instagram: "https://www.instagram.com/igotyuandme/",
    layout: "left",
  },
];
