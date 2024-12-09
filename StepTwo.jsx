import { Button, Input } from "../components";

const answers = ['Ваш ответ', 'Ваш ответ', 'Ваш ответ', 'Ваш ответ'];

export const StepTwo = () => {
    return (
        <div className="variants-quiz">
            <div className="question">
                <h2>2. Занимательный вопрос</h2>
                <ul className="variants">
                    {answers.map((ans, index) => {
                        return (
                            <li className="variant-wrapper" key={index}>
                                <Input type="radio" name={`variant-${index}`} id={`variant-${index}`} />
                                <label htmlFor={`variant-${index}`}>{ans}</label>
                            </li>
                        );
                    })}
                </ul>
                <Button type="button" id="next-btn" text="Далее" disabled />
            </div>
        </div>
    );
};