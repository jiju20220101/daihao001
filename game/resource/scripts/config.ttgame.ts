/// 阅读 api.d.ts 查看文档
///<reference path="api.d.ts"/>

import * as path from 'path';
import { UglifyPlugin, CompilePlugin, ManifestPlugin, ExmlPlugin, EmitResConfigFilePlugin, TextureMergerPlugin, CleanPlugin, ResSplitPlugin } from 'built-in';
import { TtgamePlugin } from './ttgame/ttgame';
import { CustomPlugin } from './myplugin';
import * as defaultConfig from './config';

const config: ResourceManagerConfig = {

    buildConfig: (params) => {

        const { target, command, projectName, version } = params;
        const outputDir = `../${projectName}_ttgame`;
        const originDir = `../${projectName}_ttgame_remote/`;
        if (command == 'build') {
            return {
                outputDir,
                commands: [
                    new CleanPlugin({ matchers: ["js", "resource"] }),
                    new CompilePlugin({ libraryType: "debug", defines: { DEBUG: true, RELEASE: false } }),
                    new ExmlPlugin('commonjs'), // 非 EUI 项目关闭此设置
                    new TtgamePlugin(),
                    new ManifestPlugin({ output: 'manifest.js' })
                ]
            }
        }
        else if (command == 'publish') {
            return {
                outputDir,
                commands: [
                    new CleanPlugin({ matchers: ["js", "resource", originDir] }),
                    new CompilePlugin({ libraryType: "release", defines: { DEBUG: false, RELEASE: true } }),
                    new ExmlPlugin('commonjs'), // 非 EUI 项目关闭此设置
                    new TtgamePlugin(),
                    new UglifyPlugin([{
                        sources: ["main.js"],
                        target: "main.min.js"
                    }
                    ]),
                    new CleanPlugin({ matchers: ["openDataContext"] }),
                    new ResSplitPlugin({
                        matchers: [
                            { from: "resource/assets/images/loginmain/**", to: originDir },
                            { from: "resource/assets/images/bean/*", to: originDir },
                            { from: "resource/assets/images/game/*", to: originDir },
                            { from: "resource/assets/images/pve/*", to: originDir },
                            { from: "resource/assets/images/ranklist/*", to: originDir },
                            { from: "resource/assets/images/share/*", to: originDir },
                            { from: "resource/extend.res.json", to: originDir },
                        ]
                    }),
                    new ManifestPlugin({ output: 'manifest.js' })
                ]
            }
        }
        else {
            throw `unknown command : ${params.command}`;
        }
    },

    mergeSelector: defaultConfig.mergeSelector,

    typeSelector: defaultConfig.typeSelector
}



export = config;