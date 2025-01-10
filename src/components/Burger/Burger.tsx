
interface BurgerProps {
    ingredients: { name: string; count: number }[];
    total: number;
}


const Burger: React.FC<BurgerProps> = ({ingredients, total}) => {
    return (
        <div className='Burger'>
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients.map((ingredient, index) => {
                const ingredientEl = [];
                for (let j = 0; j < ingredient.count; j++) {
                    ingredientEl.push(<div key={index} className={ingredient.name}></div>)
                }
                return ingredientEl;
            })}
            <div className="BreadBottom"></div>
            Price: {total}
        </div>
    )
}
export default Burger;