import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Object array
const items = [
  {
    id: 1,
    category: 'artist',
    name: 'P9D',
    infoUrl: 'https://www.bing.com/videos/riverview/relatedvideo?&q=%e0%b9%80%e0%b8%9e%e0%b8%a5%e0%b8%87+p9d&&mid=487D366A7C2D5A5DC88B487D366A7C2D5A5DC88B&&FORM=VRDGAR',
    age: 24,
    adopted: true,
    birthday: '1999-11-20',
    music: 'กดหมดเเม็ก',
    imageUrl: '/image/p9d.jpg'
  },
  {
    id: 2,
    category: 'artist',
    name: '1MILL',
    infoUrl: 'https://www.bing.com/videos/riverview/relatedvideo?&q=1mill&&mid=3769AE17A31DD1FDA3CC3769AE17A31DD1FDA3CC&&FORM=VRDGAR',
    age: 18,
    adopted: true,
    birthday: '1984-8-21',
    music: 'โรงเรียนเข้าเเต่ไม่เข้าเรียน',
    imageUrl: '/image/1mill.jpg'
  },
  {
    id: 3,
    category: 'artist',
    name: '',
    infoUrl: 'https://www.bing.com/videos/riverview/relatedvideo?q=diamond++%e0%b9%80%e0%b9%80%e0%b8%a3%e0%b9%89%e0%b8%9e%e0%b9%80%e0%b8%9b%e0%b8%ad&&mid=C7280A9CBF9B20E089B0C7280A9CBF9B20E089B0&&mmscn=stvo&FORM=VRDGAR',
    age: 19,
    adopted: true,
    birthday: '2000-01-20',
    music: 'เพรชเต็มตัว',
    imageUrl: '/image/DIAMOND.jpg'
  },
  {
    id: 4,
    category: 'artist',
    name: '4bang',
    infoUrl: 'https://www.bing.com/videos/riverview/relatedvideo?q=4bang&&mid=3705996E25359B463D7F3705996E25359B463D7F&FORM=VCGVRP',
    age: 27,
    adopted: true,
    birthday: '2011-03-1',
    music: 'อิสระกลางปีก',
    imageUrl: '/image/4bang.jpg'
  },
  {
    id: 5,
    category: 'artist',
    name: 'Sarun',
    infoUrl: 'https://www.bing.com/videos/riverview/relatedvideo?q=saran+%e0%b9%80%e0%b9%80%e0%b8%a3%e0%b9%8a%e0%b8%9e%e0%b9%80%e0%b8%9b%e0%b8%ad%e0%b8%a3%e0%b9%8c&mid=89F31D26EC6E489260C589F31D26EC6E489260C5&mmscn=stvo&FORM=VCGVRP',
    age: 30,
    adopted: true,
    birthday: '2003-09-11',
    music: 'Promethazine',
    imageUrl: '/image/saran.jpg'
  }
];

// Routes
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  item ? res.json(item) : res.status(404).json({ error: 'Item not found' });
});

app.get('/api/items/category/:category', (req, res) => {
  const filteredItems = items.filter(
    i => i.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(filteredItems);
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
