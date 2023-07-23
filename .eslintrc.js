module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@nuxtjs/eslint-config-typescript',
        'eslint-config-prettier',
        'plugin:jsdoc/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 没有any
        '@typescript-eslint/no-explicit-any': 'error',
        // 关闭类型推断
        // '@typescript-eslint/no-inferrable-types': 'off',
        // 变量、参数必须有类型
        // '@typescript-eslint/typedef': [
        //     'error',
        //     {
        //         arrayDestructuring: true,
        //         arrowParameter: false,
        //         memberVariableDeclaration: true,
        //         objectDestructuring: true,
        //         parameter: true,
        //         propertyDeclaration: true,
        //         variableDeclaration: true,
        //         variableDeclarationIgnoreFunction: true,
        //     },
        // ],
        '@typescript-eslint/no-this-alias': 'off',
        // 命名格式
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variableLike',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
                leadingUnderscore: 'allow',
            },
        ],
        // 类型注释前要有空格
        '@typescript-eslint/type-annotation-spacing': 'error',
        // 禁止在定义变量之前使用变量
        '@typescript-eslint/no-use-before-define': 'error',
        // 关闭同一元素的get set要挨着
        '@typescript-eslint/adjacent-overload-signatures': 'off',
        // 始终使用 === 替代 ==
        eqeqeq: 'error',
        // 字符串拼接操作符之间要留空格
        'space-infix-ops': 'error',
        // 逗号后面加空格
        'comma-spacing': 'error',
        // else 关键字要与花括号保持在同一行
        'brace-style': ['error', '1tbs'],
        // 注释//与内容之间要有空格
        'spaced-comment': [
            'error',
            'always',
            {
                markers: ['/'],
            },
        ],
        // 没有var声明
        'no-var': 'error',
        // 函数必须有返回类型
        '@typescript-eslint/explicit-function-return-type': ['error'],
        // 文件末尾留一空行
        'eol-last': 'error',
        // 键值对当中冒号与值之间要留空白
        'key-spacing': 'error',
        // switch 语句中不要定义重复的 case 分支
        'no-duplicate-case': 'error',
        // 允许prototype
        'no-prototype-builtins': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        /**
         * 注释相关
         */
        // Class Interface Type Enum classMethod 必须要要有注释
        'jsdoc/require-jsdoc': [
            'error',
            { contexts: ['ClassDeclaration', 'MethodDefinition', 'TSInterfaceDeclaration', 'TSTypeAliasDeclaration', 'TSEnumDeclaration'] },
        ],
        // 注释上必须要有内容
        'jsdoc/require-description': [
            'error',
            { contexts: ['ClassDeclaration', 'MethodDefinition', 'TSInterfaceDeclaration', 'TSTypeAliasDeclaration', 'TSEnumDeclaration'] },
        ],
        // 关闭组件命名规则
        'vue/multi-word-component-names': 'off',
    },
};
