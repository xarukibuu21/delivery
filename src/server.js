/* eslint-disable import/no-named-as-default */
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
import apiItemRouter from './routes/apiItemRouter';
import itemRouter from './routes/itemRouter';
import resLocals from './middlewares/resLocals';
import apiSignRouter from './routes/apiSignRouter';
import indexRouter from './routes/indexRouter';
import apiSignInRouter from './routes/apiSignInRouter';
import protection from './routes/protectionRouter';

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(resLocals);

app.use('/items', itemRouter);
app.use('/api/items', apiItemRouter);
app.use('/', indexRouter);
app.use('/', apiSignRouter);
app.use('/', apiSignInRouter);
app.use('*', protection);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
