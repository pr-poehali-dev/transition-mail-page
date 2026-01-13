export default function EmailPreview() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#f5f5f5' }}>
        <tbody>
          <tr>
            <td align="center" style={{ padding: '20px 0' }}>
              <table width={600} cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#ffffff', maxWidth: '600px' }}>
                <tbody>
                  {/* Шапка с фирменным стилем */}
                  <tr>
                    <td style={{ backgroundColor: '#272D49', padding: '30px 40px' }}>
                      <table width="100%" cellPadding="0" cellSpacing="0">
                        <tbody>
                          <tr>
                            <td align="center" style={{ paddingBottom: '25px' }}>
                              <img 
                                src="https://cdn.poehali.dev/files/KGS_logo_white_yellow.png" 
                                alt="КГС" 
                                width="150" 
                                style={{ display: 'block', maxWidth: '150px', height: 'auto' }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <table cellPadding="0" cellSpacing="0">
                                <tbody>
                                  <tr>
                                    <td align="center" style={{ paddingBottom: '12px' }}>
                                      <div style={{ display: 'inline-block', backgroundColor: '#F6A327', color: '#272D49', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>
                                        10+ лет на рынке
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <h1 style={{ margin: '15px 0 12px 0', fontSize: '26px', color: '#ffffff', fontWeight: 'bold', lineHeight: '1.3' }}>
                                КоперГруппСервис — надежный партнер в оборудовании для свайного фундаментостроения
                              </h1>
                              <p style={{ margin: 0, fontSize: '15px', color: '#d1d5db', lineHeight: '1.6' }}>
                                Торгово-производственная компания с более чем 10-летним опытом успешной работы в сфере оборудования для фундаментостроения.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  {/* Категории оборудования */}
                  <tr>
                    <td style={{ padding: '30px 30px' }}>
                      <table width="100%" cellPadding="0" cellSpacing="0">
                        <tbody>
                          {/* Строка 1 */}
                          <tr>
                            <td width="48%" valign="top" style={{ backgroundColor: '#fafafa', borderLeft: '4px solid #F6A327', padding: '20px', borderRadius: '6px' }}>
                              <div style={{ paddingBottom: '12px', fontSize: '32px' }}>🔨</div>
                              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#272D49', fontWeight: 'bold' }}>
                                Сваебойные молоты
                              </h3>
                              <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#434242', lineHeight: '1.5' }}>
                                Надежное оборудование для забивки свай
                              </p>
                              <a href="https://site-redesign-kgs.poehali.dev/" style={{ display: 'inline-block', color: '#F6A327', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                                Подробнее →
                              </a>
                            </td>
                            <td width="4%"></td>
                            <td width="48%" valign="top" style={{ backgroundColor: '#fafafa', borderLeft: '4px solid #F6A327', padding: '20px', borderRadius: '6px' }}>
                              <div style={{ paddingBottom: '12px', fontSize: '32px' }}>🏗️</div>
                              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#272D49', fontWeight: 'bold' }}>
                                Копровые мачты
                              </h3>
                              <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#434242', lineHeight: '1.5' }}>
                                Профессиональные мачты для установки свай
                              </p>
                              <a href="https://site-redesign-kgs.poehali.dev/" style={{ display: 'inline-block', color: '#F6A327', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                                Подробнее →
                              </a>
                            </td>
                          </tr>

                          <tr><td colSpan={3} style={{ height: '15px' }}></td></tr>

                          {/* Строка 2 */}
                          <tr>
                            <td width="48%" valign="top" style={{ backgroundColor: '#fafafa', borderLeft: '4px solid #F6A327', padding: '20px', borderRadius: '6px' }}>
                              <div style={{ paddingBottom: '12px', fontSize: '32px' }}>⚙️</div>
                              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#272D49', fontWeight: 'bold' }}>
                                Вибропогружатели экскаваторные
                              </h3>
                              <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#434242', lineHeight: '1.5' }}>
                                Эффективное погружение свай вибрацией
                              </p>
                              <a href="https://site-redesign-kgs.poehali.dev/" style={{ display: 'inline-block', color: '#F6A327', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                                Подробнее →
                              </a>
                            </td>
                            <td width="4%"></td>
                            <td width="48%" valign="top" style={{ backgroundColor: '#fafafa', borderLeft: '4px solid #F6A327', padding: '20px', borderRadius: '6px' }}>
                              <div style={{ paddingBottom: '12px', fontSize: '32px' }}>🚜</div>
                              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#272D49', fontWeight: 'bold' }}>
                                Сваебойные установки
                              </h3>
                              <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#434242', lineHeight: '1.5' }}>
                                Комплексные решения для свайных работ
                              </p>
                              <a href="https://site-redesign-kgs.poehali.dev/" style={{ display: 'inline-block', color: '#F6A327', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                                Подробнее →
                              </a>
                            </td>
                          </tr>

                          <tr><td colSpan={3} style={{ height: '15px' }}></td></tr>

                          {/* Строка 3 */}
                          <tr>
                            <td width="48%" valign="top" style={{ backgroundColor: '#fafafa', borderLeft: '4px solid #F6A327', padding: '20px', borderRadius: '6px' }}>
                              <div style={{ paddingBottom: '12px', fontSize: '32px' }}>🔩</div>
                              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#272D49', fontWeight: 'bold' }}>
                                Свайные наголовники
                              </h3>
                              <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#434242', lineHeight: '1.5' }}>
                                Качественные наголовники для защиты свай
                              </p>
                              <a href="https://site-redesign-kgs.poehali.dev/" style={{ display: 'inline-block', color: '#F6A327', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                                Подробнее →
                              </a>
                            </td>
                            <td width="4%"></td>
                            <td width="48%" valign="top" style={{ backgroundColor: '#fafafa', borderLeft: '4px solid #F6A327', padding: '20px', borderRadius: '6px' }}>
                              <div style={{ paddingBottom: '12px', fontSize: '32px' }}>⛏️</div>
                              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#272D49', fontWeight: 'bold' }}>
                                Буровые машины
                              </h3>
                              <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#434242', lineHeight: '1.5' }}>
                                Современное буровое оборудование
                              </p>
                              <a href="https://site-redesign-kgs.poehali.dev/" style={{ display: 'inline-block', color: '#F6A327', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                                Подробнее →
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  {/* Комплексное обслуживание */}
                  <tr>
                    <td style={{ padding: '0 30px 30px 30px' }}>
                      <table width="100%" cellPadding="0" cellSpacing="0" style={{ background: 'linear-gradient(135deg, #272D49 0%, #1a1f35 100%)', borderRadius: '8px' }}>
                        <tbody>
                          <tr>
                            <td style={{ padding: '35px 30px' }}>
                              <h2 style={{ margin: '0 0 20px 0', fontSize: '22px', color: '#ffffff', fontWeight: 'bold', textAlign: 'center' }}>
                                Комплексное обслуживание от нашей компании включает:
                              </h2>
                              
                              <table cellPadding="0" cellSpacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td style={{ padding: '10px 0' }}>
                                      <table cellPadding="0" cellSpacing="0">
                                        <tbody>
                                          <tr>
                                            <td style={{ verticalAlign: 'top', paddingRight: '10px', color: '#F6A327', fontSize: '18px' }}>✓</td>
                                            <td style={{ color: '#e5e7eb', fontSize: '14px', lineHeight: '1.6' }}>
                                              Профессиональные консультации по подбору оборудования и техники
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={{ padding: '10px 0' }}>
                                      <table cellPadding="0" cellSpacing="0">
                                        <tbody>
                                          <tr>
                                            <td style={{ verticalAlign: 'top', paddingRight: '10px', color: '#F6A327', fontSize: '18px' }}>✓</td>
                                            <td style={{ color: '#e5e7eb', fontSize: '14px', lineHeight: '1.6' }}>
                                              Организацию доставки любым удобным способом (ж/д, морским или автомобильным транспортом) до строительной площадки заказчика
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={{ padding: '10px 0' }}>
                                      <table cellPadding="0" cellSpacing="0">
                                        <tbody>
                                          <tr>
                                            <td style={{ verticalAlign: 'top', paddingRight: '10px', color: '#F6A327', fontSize: '18px' }}>✓</td>
                                            <td style={{ color: '#e5e7eb', fontSize: '14px', lineHeight: '1.6' }}>
                                              Полное таможенное оформление грузов
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={{ padding: '10px 0' }}>
                                      <table cellPadding="0" cellSpacing="0">
                                        <tbody>
                                          <tr>
                                            <td style={{ verticalAlign: 'top', paddingRight: '10px', color: '#F6A327', fontSize: '18px' }}>✓</td>
                                            <td style={{ color: '#e5e7eb', fontSize: '14px', lineHeight: '1.6' }}>
                                              Шефмонтажные работы непосредственно на объекте
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={{ padding: '10px 0' }}>
                                      <table cellPadding="0" cellSpacing="0">
                                        <tbody>
                                          <tr>
                                            <td style={{ verticalAlign: 'top', paddingRight: '10px', color: '#F6A327', fontSize: '18px' }}>✓</td>
                                            <td style={{ color: '#e5e7eb', fontSize: '14px', lineHeight: '1.6' }}>
                                              Сервисное обслуживание и обеспечение запасными частями
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                              <p style={{ margin: '25px 0 0 0', fontSize: '14px', color: '#d1d5db', lineHeight: '1.6', textAlign: 'center' }}>
                                Мы предлагаем полный цикл услуг под ключ, обеспечивая наших клиентов всем необходимым для успешной реализации строительных проектов.
                              </p>

                              <table cellPadding="0" cellSpacing="0" style={{ margin: '25px auto 0' }}>
                                <tbody>
                                  <tr>
                                    <td align="center">
                                      <a 
                                        href="https://site-redesign-kgs.poehali.dev/" 
                                        style={{ 
                                          display: 'inline-block', 
                                          backgroundColor: '#F6A327', 
                                          color: '#272D49', 
                                          textDecoration: 'none', 
                                          padding: '14px 28px', 
                                          borderRadius: '6px', 
                                          fontSize: '14px', 
                                          fontWeight: 'bold', 
                                          margin: '0 5px 10px 5px' 
                                        }}
                                      >
                                        📖 Получить каталог
                                      </a>
                                      <a 
                                        href="https://site-redesign-kgs.poehali.dev/" 
                                        style={{ 
                                          display: 'inline-block', 
                                          backgroundColor: 'transparent', 
                                          color: '#F6A327', 
                                          textDecoration: 'none', 
                                          padding: '14px 28px', 
                                          borderRadius: '6px', 
                                          fontSize: '14px', 
                                          fontWeight: 'bold', 
                                          border: '2px solid #F6A327', 
                                          margin: '0 5px 10px 5px' 
                                        }}
                                      >
                                        📞 Получить консультацию
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  {/* Футер */}
                  <tr>
                    <td align="center" style={{ padding: '25px 30px 35px 30px', backgroundColor: '#fafafa' }}>
                      <table cellPadding="0" cellSpacing="0">
                        <tbody>
                          <tr>
                            <td align="center" style={{ paddingBottom: '15px' }}>
                              <img 
                                src="https://cdn.poehali.dev/files/KGS_logo_blue_yellow.png" 
                                alt="КГС" 
                                width="120" 
                                style={{ display: 'block', maxWidth: '120px', height: 'auto' }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#272D49', fontWeight: 'bold' }}>
                                КоперГруппСервис
                              </p>
                              <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#434242', lineHeight: '1.5' }}>
                                Надежный партнер в оборудовании для свайного фундаментостроения
                              </p>
                              <p style={{ margin: 0, fontSize: '13px' }}>
                                <a href="https://site-redesign-kgs.poehali.dev/" style={{ color: '#F6A327', textDecoration: 'none', fontWeight: 600 }}>
                                  Посетить сайт →
                                </a>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
