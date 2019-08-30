/*
我们在日常写React代码的时候，一般情况是用不到Refs这个东西，因为我们并不直接操作底层DOM元素，
而是在render函数里去编写我们的页面结构，由React来组织DOM元素的更新。

凡事总有例外，总会有一些很奇葩的时候我们需要直接去操作页面的真实DOM，这就要求我们有直接访问真实DOM的能力，
而Refs就是为我们提供了这样的能力。

看这个名字也知道，Refs其实是提供了一个对真实DOM（组件）的引用，我们可以通过这个引用直接去操作DOM（组件）

React V16版本新增一个API：React.createRef(); 通过这个API，我们可以先创建一个ref变量，
然后再将这个变量赋值给组件声明中ref属性就好了。

*/

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }

    render() {
        // tell React that we want to associate the <input> ref
        // with the `textInput` that we created in the constructor
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

/*
在上面的代码中，我们先通过 React.createRef();创建一个ref，并赋值给组件属性textInput（this.textInput），
然后在render函数中通过ref={this.textInput}的方式将ref和input这个真实DOM联系起来， 
这样就可以通过 this.textInput.current.focus();的方式来直接操作input元素的方法。
*/