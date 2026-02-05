// import React, { useEffect } from 'react'
// import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
// import { useState } from "react"
// // import "./home.css"

// const Home = () => {
//   const postPerPage = 5;
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const getData = async () => {
//     const result = await fetch(`https://dummyjson.com/posts?limit=10&&skip=${page*postPerPage - postPerPage}`);
//     const data = await result.json();
//     console.log(data);
//     setPosts(data.posts);
//     setTotalPages(data.posts.length/postPerPage)
//   }

//   const handlePage = (index)=>{
//     setPage(index+1)
//   }

//   useEffect(() => {
//     getData();
//   }, [page])

//   return (
//     <div>
//       <div className='posts'>
//         {
//           posts.map((post, index) => {
//             return (
//               <div id={index} className='post_card'>
//                 <span className='post_title'>{post.title}</span>
//                 <span className='post_reactions'>

//                   <AiOutlineLike /> {`: ${post.reactions.likes}`} <AiOutlineDislike /> {`: ${post.reactions.dislikes}`}

//                 </span>
//                 <span className='post_tags'>
//                   {
//                     post.tags.map((tag, index) => {
//                       return <label id={index} className='post_tag'>{tag}</label>
//                     })
//                   }
//                 </span>
//               </div>
//             )
//           })
//         }

//       </div>
//       <div className='page-numbers flex items-center justify-center'>
//         {
//           [...Array(totalPages)].map((_, index)=>{
//             return <span className='flex items-center justify-center w-[50px] h-[50px] bg-indigo-200 border-1 border-black cursor-pointer' onClick={()=>handlePage(index)}>{index+1}</span>
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default Home
