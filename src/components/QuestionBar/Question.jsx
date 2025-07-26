const Question = () => {
  return (
    <div className="container border-2 p-4 my-[3%] mx-[10%] max-w-[80%] max-h-[150px] text-white">
      <div className="upper flex max-h-1/4 mb-1.5 gap-[20px]">
        <div className="title w-9/10 overflow-hidden text-ellipsis whitespace-nowrap">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          consectetur ipsa cumque quibusdam vero corrupti, harum necessitatibus
          explicabo cupiditate blanditiis?
        </div>
        <div className="ansCount border px-1 rounded-md whitespace-nowrap">
          0 ans
        </div>
      </div>
      <div className="lower flex gap-[20px] max-h-20  h-fit">
        <div className="left max-w-[20%] min-w-[100px] flex flex-col justify-between"> 
          <div className="tags flex gap-2 mt-1 overflow-scroll scrollbar-hide ">
            <div className="tag border px-1.5 rounded-md">tag1</div>
            <div className="tag border px-1.5 rounded-md">tag2</div>
            <div className="tag border px-1.5 rounded-md">tag2</div>
            <div className="tag border px-1.5 rounded-md">tag2</div>
          </div>
          <div className="username text-center overflow-hidden text-ellipsis whitespace-nowrap  ">John Doe </div>
        </div>
        <div className="right max-h-full">
          <div className="description overflow-hidden text-ellipsis max-w-[100%] max-h-full line-clamp-3 leading-tight text-justify">
            My name is John Doe Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Doloribus, ad? Blanditiis nam similique amet illum
            voluptatibus unde quasi, molestiae suscipit ab tempore labore dolor
            placeat, nihil sapiente, at doloribus sit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
