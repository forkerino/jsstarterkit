import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

/* eslint-disable no-console */

console.log(chalk.blue('Generating minified bundle'));

webpack(webpackConfig).run((err,stats)=>{
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }
    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow('Webpack generated the following warnings:'));
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack stats: ${stats}`);

    console.log(chalk.green('Your app has been built.'));
    return 0;
});