const Loading = ({loaderDesc}) => {
    return (
      <div className="flex justify-center items-center h-20">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  };
  
  export default Loading;