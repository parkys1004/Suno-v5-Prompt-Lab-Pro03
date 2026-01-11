import { Genre } from './types';

export const RADAR_LABELS = ['에너지', '전자음', '어쿠스틱', '분위기', '복잡성'];

export const GENRE_DATA: Genre[] = [
  { 
    id: 1, 
    name: "Lo-fi Hip Hop", 
    category: "Standard", 
    desc: "차분한 비트와 부드러운 재즈 화성이 특징입니다. 공부하거나 휴식을 취할 때 완벽한 배경음악이 되어줍니다. LP 노이즈와 다운템포 리듬이 핵심 요소입니다.", 
    attr: [7, 8, 3, 9, 4], 
    tags: ["Chill", "Study", "Jazz"]
  },
  { 
    id: 2, 
    name: "Synthwave", 
    category: "Standard", 
    desc: "80년대 복고풍 사운드와 네온 감성 장르입니다. 아날로그 신디사이저와 드럼 머신을 사용하여 미래지향적이면서도 향수를 자극하는 독특한 분위기를 자아냅니다.", 
    attr: [8, 10, 1, 9, 6], 
    tags: ["Retro", "80s", "Cyberpunk"]
  },
  { 
    id: 3, 
    name: "Hard Rock", 
    category: "Standard", 
    desc: "강력한 기타 리프와 파워풀한 드럼이 특징입니다. 블루스에 뿌리를 두고 있으며, 왜곡된 전기 기타 사운드와 공격적인 보컬이 주를 이룹니다.", 
    attr: [10, 2, 4, 5, 7], 
    tags: ["Heavy", "Energy", "Riff"]
  },
  { 
    id: 4, 
    name: "Orchestral", 
    category: "Standard", 
    desc: "웅장한 오케스트라 사운드로 서사적 분위기를 연출합니다. 영화, 게임 등에서 감정을 고조시키거나 장대한 장면을 묘사할 때 주로 사용됩니다.", 
    attr: [6, 1, 10, 9, 9], 
    tags: ["Epic", "Cinematic", "Grand"]
  },
  { 
    id: 101, 
    name: "K-Pop: Newjeans Style", 
    category: "K-POP", 
    desc: "뉴트로와 UK 개러지 비트가 섞인 미니멀한 팝입니다. 과하지 않은 세련됨과 몽환적인 신디사이저 사운드가 조화를 이루며 청량한 분위기를 만듭니다.", 
    attr: [6, 7, 4, 9, 5], 
    tags: ["Newtro", "UK Garage", "Chill"]
  }
];