// const Logo = ({ size = "md" }) => {
//     const sizes = {
//         sm: {
//             box: "w-8 h-8",
//             dd: "text-lg",
//             text: "text-lg",
//         },
//         md: {
//             box: "w-10 h-10",
//             dd: "text-xl",
//             text: "text-xl",
//         },
//         lg: {
//             box: "w-12 h-12",
//             dd: "text-2xl",
//             text: "text-2xl",
//         },
//     };

//     return (
//         <div className="flex items-center gap-3 select-none">
//             {/* DD Monogram */}
//             <div
//                 className={`${sizes[size].box} relative flex items-center justify-center font-serif`}
//             >
//                 <span
//                     className={`absolute left-0 ${sizes[size].dd} font-semibold`}
//                 >
//                     D
//                 </span>
//                 <span
//                     className={`absolute right-0 ${sizes[size].dd} font-semibold`}
//                 >
//                     D
//                 </span>
//             </div>

//             {/* Brand Text */}
//             <span className={`${sizes[size].text} font-serif tracking-tight`}>
//                 DevDiary
//             </span>
//         </div>
//     );
// };

// export default Logo;
