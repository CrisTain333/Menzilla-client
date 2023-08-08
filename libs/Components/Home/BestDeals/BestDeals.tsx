import PROductCard from '../../ProductCard/PROUDCTcard';

const BestDeals = ({ data }: any) => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1 className="text-4xl text-center font-bold my-5">Best Deals</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-5  mb-12 border-0">
                        {data && data.length !== 0 && (
                            <>
                                {data &&
                                    data.map((i: any, index: any) => (
                                        <PROductCard data={i} key={index} />
                                    ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDeals;
