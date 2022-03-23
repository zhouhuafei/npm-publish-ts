## 把ts打包成js
* 把ts打包成js需要使用`gulp`命令。
* 使用`gulp`命令需要`gulp-cli`包和`gulp`包和`gulp-typescript`包和`gulpfile.ts`配置文件。

## 配置alias
* 配置alias需要`gulp-ts-alias-fix`包和`typescript-transform-paths`包。

## 使用ts写jest
* 使用ts写jest需要`ts-jest`包和`jest.config.js`配置文件。

## 删除dist目录
* 删除dist目录需要`del`包。

## 直接运行ts
* 直接运行ts需要`ts-node`包。

## 限制`git commit`格式
* 限制`git commit`格式需要`husky`包和`@commitlint/config-conventional`包和`commitlint.config.js`配置文件和`commit-msg`脚本文件。

## 使用`git cz`取代`git commit`
* 使用`git cz`取代`git commit`只需`npm i -g git-cz`即可。

## 使用eslint检测ts
* 使用eslint检测ts需要`eslint`包和`@typescript-eslint/eslint-plugin`包和`.eslintrc.js`配置文件。
* 使用standard规范需要`eslint-config-standard`包。

## 对暂存区的git文件进行fix
* 对暂存区的git文件进行fix需要`husky`包和`lint-staged`包和`lint-staged.config.js`配置文件和`pre-commit`脚本文件。

## 使用`conventional-changelog`命令生成`CHANGELOG.md`文件
* 使用`conventional-changelog`命令生成`CHANGELOG.md`文件需要`conventional-changelog-cli`包。
#### 初始化内容：`npx conventional-changelog -p angular -i CHANGELOG.md -s -r 0`。
* 不仅可在git打tag之后使用（会生成全部tag的feat和fix）。
  - 操作时需要先对package.json的version字段进行自增，然后打tag，最后运行上述命令。
* 也可以在git打tag之前使用（会生成自上次tag后的feat和fix）。
  - 操作时需要先对package.json的version字段进行自增，然后运行上述命令，最后打tag。
#### 追加新内容：`npx conventional-changelog -p angular -i CHANGELOG.md -s`。
* 只可以在git打tag之前使用（会生成自上次tag后的feat和fix）。
  - 操作时需要先对package.json的version字段进行自增，然后运行上述命令，最后打tag。
#### 注意事项：git的tag需要是v开头的格式。
* 例：`git tag v2.0.0 -m "标签的注释"`。
#### 最佳实践：保持版本号的一致性。
* 例：如果package.json的version字段是`2.0.0`，那么git打tag时就要打成`v2.0.0`。
