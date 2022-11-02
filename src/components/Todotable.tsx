import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";

export function Todotable(props: { todos: any[]; delete: (arg0: any) => void; }) {
    return(
        <div>
            <table>
                <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Priority</th>
                </tr>
                {
                    props.todos.map((todo: { date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; desc: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; prio: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) =>
                    <tr key={index}>
                    <td>{todo.date}</td>
                    <td>{todo.desc}</td>
                    <td>{todo.prio}</td>
                    <td><button onClick={() => props.delete(index)}>Delete</button></td>
                    </tr>
                )  
                }         
                </tbody>
      </table>
        </div>
    );
}