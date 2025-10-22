interface IHeading {
    title: string;
}

export const Heading = ({ title }: IHeading) => {
    return (
        <div>
            <h1 className="text-3xl font-medium text-white">{title}</h1>
            <div className="mt-3 h-[0.5px] bg-slate-600 w-full" />
        </div>
    );
};
