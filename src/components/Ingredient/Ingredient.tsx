interface IngredientProp {
    name: string,
    count: number,
    onAdd: () => void,
    onDelete: () => void,
    image: string,
}

const Ingredient: React.FC<IngredientProp> = ({name, count, onAdd, onDelete, image}) => {
    return(
        <div className="ingredient">
            <button className='addIngredient' onClick={onAdd} type="button">
                <img src={image} alt={name}/>
            </button>
            {name}
            <span>x{count}</span>
            <button onClick={onDelete} type="button">
                X
            </button>
        </div>
    );
};
export default Ingredient;