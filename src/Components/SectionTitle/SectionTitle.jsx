// eslint-disable-next-line react/prop-types
const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="my-10">
            <h1 className="font-bold text-2xl  lg:text-5xl text-center mt-20 lg:mb-5 mb-2">{title}</h1>
            <h5 className="font-semibold text-lg lg:text-xl text-center">{subTitle}</h5>
        </div>
    );
};

export default SectionTitle;