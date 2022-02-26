
class _number {
	constructor(){// 返回对创建此对象的数组函数的引用
		var a = 3;
		console.log(a.constructor);// [Function: Number]
		console.log(a.constructor == Number);// true
	}
	/** toExponential(fractionDigits)
	 * @param fractionDigits—小数点后的位数。必须在0到20之间（包括0到20）。默认值为 0
	 */
	toExponential(){// 返回包含以指数表示的数字的字符串。
		var a = 3.5;
		console.log(a.toExponential());//3.5e+0
		console.log(a.toExponential(0));//4e+0
		console.log(a.toExponential(3));//3.500e+0
	}
	/** toFixed(fractionDigits)
	 * @param fractionDigits—小数点后的位数。必须在0到20之间（包括0到20）。
	 */
	toFixed(){// 四舍五入为数字保留指定位小数位数的数字，不改变原变量
		var a = 3.474;
		var b = 3.565;
		console.log(a.toFixed());//3
		console.log(b.toFixed());//4
		console.log(a.toFixed(2));//3.47
		console.log(b.toFixed(2));//3.56
		console.log(a);
	}
	/** toPrecision(precision)
	 * 返回一个字符串，该字符串包含用指定位数的指数或定点表示法表示的数字。
	 * @param precision-有效位数。必须在1到21之间（包括1到21）。
	 */
	toPrecision(){// 可在对象的值超出指定位数时将其转换为指数计数法
		var a = 3.5;
		console.log(a.toPrecision());//3.5
		console.log(a.toPrecision(6));//3.50000
	}
	/** toString(radix)
	 * @param radix -指定将数值转换为字符串的基数。此值仅用于数字。参数值介于2和36之间
	 * @memberof _number
	 */
	toString(){// 返回对象的字符串表示形式
		var a = 3.5;
		console.log(a.toString());//3.5
		console.log(a.toString(2));//11.1
		console.log(a.toString(10));//3.5
		console.log(a.toString(4));//3.2
		console.log(a.toString(36));//3.1
	}
	valueOf(){// 返回指定对象的基元值。
		var a = 3.5;
		console.log(a.valueOf());//3.5
	}
	/** numObj.toLocaleString([locales [, options]])
	 * 使用当前或指定的区域设置将数字转换为字符串。
	 * @param locales-包含一个或多个语言或区域设置标记的区域设置字符串或区域设置字符串数组。如果包含多个区域设置字符串，请按优先级降序列出它们，以便第一个条目是首选区域设置。如果省略此参数，则使用JavaScript运行时的默认区域设置。
	 * @param options-包含指定比较选项的一个或多个属性的对象。
	 */
	toLocaleString(){// 返回这个数字在特定语言环境下的表示字符串
		var a = 3.5;
		console.log(a.toLocaleString());//3.5
		var b = 3543.32;
		console.log(b.toLocaleString());//3,543.32
	}
}
// {
// // 	使用 locales
// // 这个示例展示了不同地区数字格式的差异。为了设置你的应用程序界面下使用的语言格式，请确保使用 locales 参数指定了使用的语言（可能还有一些备用语言）：

// var number = 123456.789;

// // 德国使用逗号作为小数分隔符，分位周期为千位
// console.log(number.toLocaleString('de-DE'));
// // → 123.456,789

// // 在大多数阿拉伯语国家使用阿拉伯语数字
// console.log(number.toLocaleString('ar-EG'));
// // → ١٢٣٤٥٦٫٧٨٩

// // 印度使用千位/拉克（十万）/克若尔（千万）分隔
// console.log(number.toLocaleString('en-IN'));
// // → 1,23,456.789

// // nu 扩展字段要求编号系统，e.g. 中文十进制
// console.log(number.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// // → 一二三,四五六.七八九

// // 当请求不支持的语言时，例如巴厘语，加入一个备用语言，比如印尼语
// console.log(number.toLocaleString(['ban', 'id']));
// // → 123.456,789
// }

// {
// 	// 使用 options
// 	// 通过 toLocaleString 返回的结果可以通过 options 参数进行定制：

// 	var number = 123456.789;

// 	// 要求货币格式
// 	console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// 	// → 123.456,79 €

// 	// 日元不使用小数位
// 	console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// 	// → ￥123,457

// 	// 限制三位有效数字
// 	console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// 	// → 1,23,000
// }