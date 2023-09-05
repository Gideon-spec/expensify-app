const add = (a, b) => a + b ;
const generateGreeting = (name) => `hello ${name}!`

test('Should add two numbers', ()=>{
    const result = add(3, 4);
    expect(result).toBe(7)
    }
);

test('testing Greeting', () =>{
    const results = generateGreeting('Mike');
    expect(results).toBe(`hello Mike!`)
});