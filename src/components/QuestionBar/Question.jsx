const Question = () => {
  return (
    <div className="container border-2 p-4 my-[3%] mx-[10%] max-w-[80%] max-h-[150px] text-white">
      <div className="upper flex max-h-1/4">
        <div className="title w-9/10 overflow-hidden text-ellipsis whitespace-nowrap">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          consectetur ipsa cumque quibusdam vero corrupti, harum necessitatibus
          explicabo cupiditate blanditiis?
        </div>
        <div className="ansCount border p-1 rounded-md whitespace-nowrap">
          0 ans
        </div>
      </div>
      <div className="lower flex gap-4 max-h-10  ">
        <div className="left max-w-[30%]">
          <div className="tags flex gap-2">
            <div className="tag border px-2 rounded-md">tag1</div>
            <div className="tag border px-2 rounded-md">tag2</div>
          </div>
          <div className="username text-center">John Doe</div>
        </div>
        <div className="right max-w-[70%] max-h-full">
          <div className="description overflow-hidden text-ellipsis whitespace-nowrap max-w-[100%] max-h-full">
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
