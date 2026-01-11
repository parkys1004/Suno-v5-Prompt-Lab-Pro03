import { Genre } from './types';

export const RADAR_LABELS = ['에너지', '전자음', '어쿠스틱', '분위기', '복잡성'];

export const GENRE_DATA: Genre[] = [
  { 
    id: 1, 
    name: "Lo-fi Hip Hop", 
    category: "Standard", 
    desc: "차분한 비트와 부드러운 재즈 화성이 특징입니다.", 
    attr: [7, 8, 3, 9, 4], 
    tags: ["Chill", "Study", "Jazz"], 
    prompts: [
      { text: "lo-fi hip hop, jazzy chords, rainy day atmosphere, vinyl crackle", desc: "비 오는 날의 감성적인 재즈 힙합" },
      { text: "chill lo-fi, soft piano melody, slow tempo, relaxing vibe", desc: "편안한 피아노 선율의 휴식용 비트" },
      { text: "lofi hiphop, nocturnal, city lights, muted trumpet, smooth bass", desc: "도시의 야경과 어울리는 차분한 무드" },
      { text: "study beats, lofi, organic textures, bird chirping, warm pads", desc: "공부할 때 듣기 좋은 자연적인 질감" },
      { text: "lofi jazz hop, saxophone, dusty drums, nostalgic, sunset", desc: "노을 지는 저녁의 노스탤지어" },
      { text: "chillhop, electric piano, boom bap drums, relaxed, mellow", desc: "여여로운 그루브의 칠홉 스타일" }
    ] 
  },
  { 
    id: 2, 
    name: "Synthwave", 
    category: "Standard", 
    desc: "80년대 복고풍 사운드와 네온 감성 장르입니다.", 
    attr: [8, 10, 1, 9, 6], 
    tags: ["Retro", "80s", "Cyberpunk"], 
    prompts: [
      { text: "80s synthwave, retro-futuristic, analog synths, driving beat", desc: "80년대 미래주의 감성의 질주" },
      { text: "dreamy chillwave, hazy synths, nostalgic, slow tempo", desc: "몽환적이고 안개 낀 듯한 사운드" },
      { text: "outrun, neon nights, fast electronic drums, arpeggiated bass", desc: "네온 사인을 가르는 빠른 드라이브" },
      { text: "dark synthwave, horror movie style, deep bass, aggressive synths", desc: "어둡고 위협적인 복고풍 호러 스타일" },
      { text: "vaporwave style, chopped and screwed, elevator music remix, nostalgic", desc: "기괴하면서도 그리운 베이퍼웨이브" },
      { text: "synthwave disco, funky, dancing, 80s pop, bright", desc: "춤추기 좋은 밝은 신스 팝 디스코" }
    ]
  },
  { 
    id: 3, 
    name: "Hard Rock", 
    category: "Standard", 
    desc: "강력한 기타 리프와 파워풀한 드럼이 특징입니다.", 
    attr: [10, 2, 4, 5, 7], 
    tags: ["Heavy", "Energy", "Riff"], 
    prompts: [
      { text: "hard rock, heavy distorted guitar riffs, powerful drums", desc: "클래식하고 강력한 하드 록 리프" },
      { text: "modern hard rock, drop-D tuning, punchy production", desc: "현대적이고 깔끔하게 다듬어진 사운드" },
      { text: "stadium rock, anthem, cheering crowd, soaring guitar solo", desc: "경기장을 가득 채우는 웅장한 록" },
      { text: "blues rock, crunchy guitar, gravelly vocals, steady beat", desc: "거친 보컬과 블루지한 기타의 조화" },
      { text: "70s hard rock, vintage tube amp sound, cowbell, driving bass", desc: "빈티지한 70년대 정통 록 사운드" },
      { text: "grunge style, raw energy, distorted, melancholic verses", desc: "너바나 스타일의 거칠고 우울한 록" }
    ]
  },
  { 
    id: 4, 
    name: "Orchestral", 
    category: "Standard", 
    desc: "웅장한 오케스트라 사운드로 서사적 분위기를 연출합니다.", 
    attr: [6, 1, 10, 9, 9], 
    tags: ["Epic", "Cinematic", "Grand"], 
    prompts: [
      { text: "epic orchestral, cinematic strings, powerful brass, heroic", desc: "영웅의 등장을 알리는 웅장한 연주" },
      { text: "dark orchestral, suspenseful atmosphere, gothic fantasy", desc: "고딕 판타지 느낌의 긴장감 넘치는 곡" },
      { text: "melancholic strings, emotional violin solo, soft cello, weep", desc: "가슴을 울리는 서글픈 현악 중주" },
      { text: "magic adventure, whimsical woodwinds, bells, fantasy world", desc: "모험을 떠나는 듯한 신비로운 사운드" },
      { text: "action cinematic, fast staccato strings, heavy percussion, intense", desc: "박진감 넘치는 액션 영화 배경 음악" },
      { text: "baroque orchestra, harpsichord, formal, royal palace vibe", desc: "왕궁의 무도회가 연상되는 고전적 무드" }
    ]
  },
  { 
    id: 101, 
    name: "K-Pop: Newjeans Style", 
    category: "K-POP", 
    desc: "뉴트로와 UK 개러지 비트가 섞인 미니멀한 팝입니다.", 
    attr: [6, 7, 4, 9, 5], 
    tags: ["Newtro", "UK Garage", "Chill"], 
    prompts: [
      { text: "k-pop, Newjeans style, UK garage beat, jersey club, nostalgic", desc: "청량하고 미니멀한 이지리스닝" },
      { text: "y2k pop, 90s aesthetic, drum and bass lite, airy vocals", desc: "Y2K 감성의 몽환적 댄스곡" },
      { text: "lo-fi kpop, soft synths, muted drums, teenage dream atmosphere", desc: "나른하고 감성적인 하이틴 무드" },
      { text: "rhythmic k-pop, 2-step garage, clean production, catchy hook", desc: "세련된 리듬감의 트렌디한 팝" },
      { text: "summer breeze kpop, light synth, acoustic guitar pluck, refreshing", desc: "여름 바람처럼 시원하고 가벼운 곡" },
      { text: "minimalist kpop pop, deep house influence, chic, effortless", desc: "절제된 미학이 돋보이는 시크한 스타일" }
    ]
  }
];