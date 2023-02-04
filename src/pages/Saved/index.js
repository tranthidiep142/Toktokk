import Menu from '../Menu';

function Saved() {
    return (
        <Menu
            videosInfo={[
                {
                    videoImg: '/imgs/library1.jpeg',
                    src: '/videos/library1.mp4',
                    title: 'Rồi chúng ta sẽ ngắm pháo hoa cùng nhau',
                    hashtag: '#trending #xuhuong',
                    views: '2M views',
                    time: '1 hours ago',
                    creatorImg: '/imgs/library1.jpeg',
                    creatorName: 'Nhạc chill',
                },
                {
                    videoImg: '/imgs/library2.jpeg',
                    src: '/videos/library2.mp4',
                    title: 'Một lòng một dạ để yêu ai đó quá khó phải không?!',
                    hashtag: '#trending #xuhuong',
                    views: '2M views',
                    time: '1 hours ago',
                    creatorImg: '/imgs/library2.jpeg',
                    creatorName: 'Biển của hi vọng',
                },
                {
                    videoImg: '/imgs/beauty2.jpeg',
                    src: '/videos/beauty2.mp4',
                    title: 'Kiểu tóc xinh cho bạn nữ mặt tròn',
                    hashtag: '#trending #xuhuong',
                    views: '90K views',
                    time: '1 hours ago',
                    creatorImg: '/imgs/tragiang.jpeg',
                    creatorName: 'Yang yang',
                },
                {
                    videoImg: '/imgs/beauty3.jpeg',
                    src: '/videos/beauty3.mp4',
                    title: 'Bạn vẫn chưa biết xài jeans sao cho phù hợp?!',
                    hashtag: '#trending #xuhuong',
                    views: '90K views',
                    time: '1 hours ago',
                    creatorImg: '/imgs/baongoc.jpeg',
                    creatorName: 'Giang ca',
                },
                {
                    videoImg: '/imgs/beauty1.jpeg',
                    src: '/videos/beauty1.mp4',
                    title: 'Chị em mình đều đẹp',
                    hashtag: '#trending #xuhuong',
                    views: '1M views',
                    time: '30 mins ago',
                    creatorImg: '/imgs/diepluc.jpg',
                    creatorName: 'Diep Luc',
                },
                {
                    videoImg: '/imgs/beauty4.jpeg',
                    src: '/videos/beauty4.mp4',
                    title: 'Những tông màu phối outfit cực đỉnh',
                    hashtag: '#trending #xuhuong',
                    views: '80K views',
                    time: '1 hours ago',
                    creatorImg: '/imgs/tragiang.jpeg',
                    creatorName: 'Yang yang',
                },
                {
                    videoImg: '/imgs/beauty5.jpeg',
                    src: '/videos/beauty5.mp4',
                    title: 'Dạy trang điểm level siêu nghiệp dư',
                    hashtag: '#trending #xuhuong',
                    views: '2K views',
                    time: '1 hours ago',
                    creatorImg: '/imgs/truonggiang.jpeg',
                    creatorName: 'Giang ca',
                },
            ]}
        />
    );
}

export default Saved;
