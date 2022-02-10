
/**
 * anchor 方法 | big 方法 | blink 方法 | bold 方法 | charCodeAt 方法 | concat 方法 | fixed 方法 | fontcolor 方法 | fontsize 方法 | fromCharCode 方法 | indexOf 方法 | italics 方法 | lastIndexOf 方法 | link 方法 | match 方法 | replace 方法 | search 方法 | slice 方法 | small 方法 | split 方法 | strike 方法 | sub 方法 | substr 方法 | substring 方法 | sup 方法 | toLowerCase 方法 | toUpperCase 方法 | toString 方法 | valueOf 方法
    
  anchor()	创建 HTML 锚。
toSource()	代表对象的源代码。
fromCharCode()	从字符编码创建一个字符串。

fixed()	以打字机文本显示字符串。
localeCompare()	用本地特定的顺序来比较两个字符串。
match()	找到一个或多个正则表达式的匹配。
replace()	替换与正则表达式匹配的子串。
search()	检索与正则表达式相匹配的值。
toString()	
valueOf()	返回某个字符串对象的原始值。
link()	将字符串显示为链接。

fontsize()	
 */



class _string_prototype {
    /** number charCodeAt(index: number)
     * 返回字符在指定位置的Unicode值。
     * @param index-所需字符的从零开始的索引。如果指定索引处没有字符，则返回NaN。
     */
    charCodeAt(){// 返回在指定的位置的字符的 Unicode 编码。
        var a = '中国china';
        console.log(a.charCodeAt(4));// 105
        console.log(a.charCodeAt(0));// 20013
        console.log(a.charCodeAt(1));// 22269
    }

    /** string[] split(separator: string | RegExp, limit?: number): string[] (+1 overload)
     * 使用指定的分隔符将字符串拆分为子字符串，并将其作为数组返回。
     * @param separator-标识用于分隔字符串的一个或多个字符的字符串。如果省略，则返回包含整个字符串的单个元素数组。
     * @param limit-用于限制数组中返回的元素数的值。
     */
    split(){// 把字符串分割为字符串数组。
        var a = "abc defg";
        console.log(a.split());// [ 'abc defg' ]
        console.log(a.split(''));// ['a', 'b', 'c', '', 'd', 'e', 'f', 'g']
        console.log(a.split(' '));// ['abc', 'defg']
        console.log(a);// abc defg
    }

    /****************************** 返回新字符串 start ************************************** */
    /** string concat(...strings: string[]) */
    concat(){// 连接多个字符串（返回新的字符串）
        var a = "aaa";
        var b = "bbb";
        var c = a.concat(b);
        console.log(a);// aaa
        console.log(b);// bbb
        console.log(c);// aaabbb
    }

    /*********************** 截取 start *********************** */
    /** string slice(start?: number, end?: number)
     * @param start-指向stringObj指定部分开头的索引。
     * @param end-指向stringObj指定部分结尾的索引。子字符串包括最多但不包括由end表示的字符。如果未指定此值，则子字符串将继续到stringObj的结尾。
     */
    slice(){// 提取字符串的片断，并在新的字符串中返回被提取的部分（返回字符串的一部分）
    }
    /** string substr(from: number, length?: number)
     * 获取从指定位置开始并具有指定长度的子字符串。
     * @param from-所需子字符串的起始位置。字符串中第一个字符的索引为零。
     * @param length-返回子字符串中要包含的字符数。
     */
    substr(){// 从起始索引号提取字符串中指定数目的字符。
        var a = "abcdefg";
        console.log(a.substr(2,2));// cd
        console.log(a.substr(2,6));// cdefg
    }
    /** string substring(from: number, end?: number)
     * 返回字符串对象中指定位置的子字符串。
     * @param start-表示子字符串开头的从零开始的索引号。
     * @param end-表示子字符串结束的基于零的索引号。子字符串包括最多但不包括由end表示的字符。如果省略end，则返回从原始字符串开始到结束的字符。
     */
    substring(){// 提取字符串中两个指定的索引号之间的字符
        var a = "abcdefg";
        console.log(a.substring(2,3));// c
        console.log(a.substring(2,4));// cd
    }
    /*********************** 截取 end *********************** */


    /** string toLocaleLowerCase(locales?: string | string[]); */
    toLocaleLowerCase(){// 把字符串中的所有字母字符转换为小写
        var a = "AbCdeFG";
        console.log(a.toLocaleLowerCase());// abcdefg
    }
    /** string toLocaleUpperCase(locales?: string | string[]); */
    toLocaleUpperCase(){// 把字符串中的所有字母字符转换为大写。
        var a = "AbCdeFG";
        console.log(a.toLocaleUpperCase());// ABCDEFG
    }
    /** string toLowerCase(locales?: string | string[]); */
    toLowerCase(){// 把字符串转换为小写。
        var a = "AbCdeFG";
        console.log(a.toLowerCase());// abcdefg
    }
    /** string toUpperCase(locales?: string | string[]); */
    toUpperCase(){// 把字符串转换为大写。
        var a = "AbCdeFG";
        console.log(a.toUpperCase());// ABCDEFG
    }
    
    /** string small() */
    small(){// 使用小字号来显示字符串（返回一个<small>HTML元素）
        var a = "abc defg";
        console.log(a.small());// <small>abc defg</small>
    }	
    /** string big() */
    big(){// 用大号字体显示字符串（返回一个<big>HTML元素）
        var a = "aaa";
        console.log(a.blink());
        console.log(a);
    }	
    /** string blink() */
    blink()	{// 显示闪动字符串（返回一个<blink>HTML元素）
        var a = "aaa";
        console.log(a.blink());// <blink>aaa</blink>
        console.log(a);// aaa
    }
    /** string bold() */
    bold() {// 使用粗体显示字符串（返回一个<b>HTML元素）
        var a = "aaa";
        console.log(a.bold());// <b>aaa</b>
        console.log(a);// aaa
    }
    /** string italics() */
    italics(){// 使用斜体显示字符串（返回一个<i>HTML元素）
        var a = "aaa";
        console.log(a.italics());// <i>aaa</i>
        console.log(a);// aaa
    }
    /** string strike() */
    strike(){// 使用删除线来显示字符串（返回一个<strike>HTML元素）
        var a = "aaa";
        console.log(a.strike());// <strike>aaa</strike>
        console.log(a);// aaa
    }
    /** string sup() */
    sup(){// 把字符串显示为上标（返回一个<sup>HTML元素）
        var a = "abcde";
        console.log(a.sup());// <sup>abcde</sup>
    }
    /** string sub() */
    sub(){// 把字符串显示为下标（返回一个<sub>HTML元素）
        var a = "abcde";
        console.log(a.sup());// <sub>abcde</sub>
    }
    /** string fontcolor(color: string) */
    fontcolor(){// 使用指定的颜色来显示字符串（返回HTML元素并设置颜色属性值）
        console.log('aaa'.fontcolor('red'));// <font color="red">aaa</font>
    }
    /** string fontsize(size: number)，size必填 */
    fontsize(){// 使用指定的尺寸来显示字符串（返回一个HTML元素并设置size属性值）
        var a = "abc defg";
        console.log(a.fontsize());// <font size="undefined">abc defg</font>
        console.log(a.fontsize(12));// <font size="12">abc defg</font>
    }
    /****************************** 返回新字符串 end ************************************** */


    /****************************** 检索 start ************************************** */
    /** number indexOf(searchString: string, position?: number)
     * @param search string-要在字符串中搜索的子字符串
     * @param position—开始搜索字符串对象的索引。如果省略，搜索从字符串的开头开始。
     */
    indexOf(){// 检索字符串（返回子字符串第一次出现的位置）
        var a = "asfeawweew";
        console.log(a.indexOf('a'));// 0
        console.log(a.indexOf('a',3));// 4
        console.log(a.indexOf('a',7));// -1
    }
    /** number lastIndexOf(searchString: string, position?: number)
     * @param search string-要在字符串中搜索的子字符串
     * @param position—开始搜索字符串对象的索引。如果省略，搜索从字符串的开头开始。
     */
    lastIndexOf(){// 从后向前搜索字符串（返回子字符串最后一次出现的位置）
        var a = "sfeawweeaw";
        console.log(a.lastIndexOf('a'));// 8
        console.log(a.lastIndexOf('a',6));// 3
        console.log(a.lastIndexOf('a',2));// -1
    }
    /** char charAt(int index); */
    charAt(){// 返回在指定位置的字符。
        var s = 'abc';
        console.log(s.charAt());// a
        var a = s.charAt();
        console.log(s.charAt(-1));// ''
        console.log(s.charAt(1));// b
        console.log(s.charAt(6));// ''
    }
    /****************************** 检索 end ************************************** */

    /** stringtoString()  返回字符串的字符串表示形式 */
    toString(){// 返回字符串。
        var a = "abc defg";
        console.log(a.toString());// abc defg
    }

    // constructor: ƒ String()
    // length: 0
    // anchor: ƒ anchor()
    // big: ƒ big()
    
    // blink: ƒ blink()
    // bold: ƒ bold()
    // charCodeAt: ƒ charCodeAt()
    // concat: ƒ concat()
    // fontcolor: ƒ fontcolor()
    // fontsize: ƒ fontsize()
    // fixed: ƒ fixed()
    // indexOf: ƒ indexOf()
    // italics: ƒ italics()
    // lastIndexOf: ƒ lastIndexOf()
    // link: ƒ link()
    // match: ƒ match()
    // search: ƒ search()
    // slice: ƒ slice()
    // small: ƒ small()
    // split: ƒ split()
    // strike: ƒ strike()
    // sub: ƒ sub()
    // substr: ƒ substr()
    // substring: ƒ substring()
    // sup: ƒ sup()
    // toString: ƒ toString()
    // toLowerCase: ƒ toLowerCase()
    // toUpperCase: ƒ toUpperCase()
    // valueOf: ƒ valueOf()
    // codePointAt: ƒ codePointAt()
    // endsWith: ƒ endsWith()
    // includes: ƒ includes()
    // localeCompare: ƒ localeCompare()
    // normalize: ƒ normalize()
    // padEnd: ƒ padEnd()
    // padStart: ƒ padStart()
    // repeat: ƒ repeat()
    // startsWith: ƒ startsWith()
    // toLocaleLowerCase: ƒ toLocaleLowerCase()
    // toLocaleUpperCase: ƒ toLocaleUpperCase()
    // at: ƒ at()
    // padLeft: ƒ padStart()
    // padRight: ƒ padEnd()
    // matchAll: ƒ matchAll()
    // trim: ƒ trim()
    // trimStart: ƒ trimLeft()
    // trimLeft: ƒ trimLeft()
    // trimEnd: ƒ trimRight()
    // trimRight: ƒ trimRight()
    // Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
}