import Video from '../Video';

function Home() {
    return (
        <Video
            videosInfo={[
                {
                    videoImg: '/imgs/program3.jpeg',
                    src: '/videos/program3.mp4',
                    title: 'Hỏi xoáy đáp xoay cùng ChatGPT',
                    hashtag: '#trending #xuhuong',
                    views: '465K views',
                    time: '3 days ago',
                    creatorImg: '/imgs/program5.jpeg',
                    creatorName: 'Programming',
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
                    videoImg: '/imgs/library1.jpeg',
                    src: '/videos/library1.mp4',
                    title: 'Một lòng một dạ để yêu ai đó quá khó phải không. Hãy giúp em trả lời một cách thật lòng',
                    hashtag: '#trending #xuhuong',
                    views: '255K views',
                    time: '3 days ago',
                    creatorImg: '/imgs/program2.jpeg',
                    creatorName: 'Hoà Minzy',
                },
                {
                    videoImg: '/imgs/library2.jpeg',
                    src: '/videos/library2.mp4',
                    title: 'Rồi chúng ta sẽ ngắm pháo hoa cùng nhau',
                    hashtag: '#trending #xuhuong',
                    views: '255K views',
                    time: '3 hours ago',
                    creatorImg: '/imgs/program2.jpeg',
                    creatorName: 'Nhạc chill',
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
                {
                    videoImg: '/imgs/cartoon1.jpeg',
                    src: '/videos/cartoon1.mp4',
                    title: 'Hiphop never die Hiphop never die Hiphop never die',
                    hashtag: '#trending #xuhuong',
                    views: '2M views',
                    time: '1 hours ago',
                    creatorImg: '/imgs/cartoon1.jpeg',
                    creatorName: 'Gaugau',
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
            ]}
        />
    );
}

export default Home;
