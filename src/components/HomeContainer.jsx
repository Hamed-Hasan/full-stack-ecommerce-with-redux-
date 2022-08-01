import React from 'react';

const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id="home">
        <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
            <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                <p className='text-base text-orange-500 font-semibold'>
                Bike Delivery
                </p>
                
            </div>
        </div>
        
    </section>
    );
};

export default HomeContainer;