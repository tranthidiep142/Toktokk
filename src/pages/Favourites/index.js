import Menu from '../Menu';

function Favourites() {
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
                    videoImg: '/imgs/beauty4.jpeg',
                    src: '/videos/beauty4.mp4',
                    title: 'Hiphop never die',
                    hashtag: '#trending #xuhuong',
                    views: '2M views',
                    time: '1 hours ago',
                    creatorImg: '/imgs/cartoon1.jpeg',
                    creatorName: 'Gaugau',
                },
                {
                    videoImg: '/imgs/beauty2.jpeg',
                    src: '/videos/beauty2.mp4',
                    title: 'Kiểu tóc xinh cho bạn nữ mặt tròn',
                    hashtag: '#trending #xuhuong',
                    views: '90K views',
                    time: '1 hours ago',
                    creatorImg: '/imgs/diepluc.jpg',
                    creatorName: 'Diep Luc',
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
                    videoImg: '/imgs/program5.jpeg',
                    src: '/videos/program5.mp4',
                    title: 'Design Thinking basic',
                    hashtag: '#trending #xuhuong',
                    views: '12M views',
                    time: '1 hours ago',
                    creatorImg: '/imgs/program5.jpeg',
                    creatorName: 'Jornathan',
                },
                {
                    videoImg: '/imgs/program2.jpeg',
                    src: '/videos/program2.mp4',
                    title: 'Chatbot AI đang khiến thế giới công nghệ phát cuồng',
                    hashtag: '#trending #xuhuong',
                    views: '255K views',
                    time: '3 hours ago',
                    creatorImg: '/imgs/program2.jpeg',
                    creatorName: 'News',
                },
                {
                    videoImg: '/imgs/cartoon3.jpeg',
                    src: '/videos/cartoon3.mp4',
                    title: 'Chị em mình đều đẹp',
                    hashtag: '#trending #xuhuong',
                    views: '90K views',
                    time: '1 hours ago',
                    creatorImg: '/imgs/cartoon3.jpeg',
                    creatorName: 'Baby cute',
                },
                {
                    videoImg: '/imgs/cartoon4.jpeg',
                    src: '/videos/cartoon4.mp4',
                    title: 'Ủa gì zợ?!',
                    hashtag: '#trending #xuhuong',
                    views: '80K views',
                    time: '1 hours ago',
                    creatorImg: '/imgs/cartoon1.jpeg',
                    creatorName: 'Gaugau',
                },
            ]}
        />
    );
}

export default Favourites;
