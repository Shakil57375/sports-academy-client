// eslint-disable-next-line react/prop-types
const SectionTitle = ({title, subTitle}) => {
    return (
        <div>
            <h1 className="font-bold text-5xl">{title}</h1>
            <h5 className="font-semibold text-3xl">{subTitle}</h5>
        </div>
    );
};

export default SectionTitle;