import check from '../../assets/check.svg';
import trash from '../../assets/tras.svg';
import rollback from '../../assets/roolback.jpg';
function TodoItem(props) {

    const { title, status } = props;
    return (

        <div className='flex item-center justify-between bg-[#15101C] p-[22px] mb-4 rounded-lg'>
            <p className='{` {$status ?} "text-[#9E78CF]" : "text-[#78CFBO ] " line-through}`}'>{title}</p>
            <div className='flex item-center justify-between gap-3' >
                {
                    status && <>
                        <span className='cursor-pointer '>
                            <img src={check} alt="" width={30} height={30} />
                        </span>
                        <span className='cursor-pointer '>
                            <img src={trash} alt="" width={30} height={30} />
                        </span>
                    </>
                }
                {    !status && <>
                        <span className='cursor-pointer '>
                            <img  src={rollback} alt="" width={30} height={30} />
                            
                        </span>
                       
                    </>
                }

            </div>
        </div>

    )
}

export default TodoItem