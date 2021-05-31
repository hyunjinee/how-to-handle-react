import Post from './models/post';


export default function createFakeData() {
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트 #${i}`,
        body:
        'dddddddddddddddddddddla jf ;l k a j; f l k j al   f d  k     jl jf a ;l jflajf;lkdja;lfkj;ldkjfaljf;lakjs;flkjd;lkfldasjf;lkdjflkajf;lajf;aljf;laksjf;lakjs;lkfja;sljfd;alfj;l'
        , tags: ['가짜', '데이터']
    }))

    Post.insertMany(posts, (err, docs)=> {
        console.log(docs);
    })
}