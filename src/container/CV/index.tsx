import React from 'react'

const Index = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f9e5ed 0%, #ffd7ea 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '40px 24px 60px',
    }}>
      <div style={{
        maxWidth: '920px',
        width: '100%',
        background: '#ffffff',
        borderRadius: '30px',
        boxShadow: '0 28px 80px rgba(0, 0, 0, 0.12)',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '40px 42px 32px',
          borderBottom: '1px solid rgba(214, 51, 132, 0.16)',
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '3rem',
            letterSpacing: '0.04em',
            color: '#61204f',
          }}>
            Heni Rahayu
          </h1>
          <p style={{
            margin: '14px 0 0',
            fontSize: '1rem',
            color: '#7d5272',
            letterSpacing: '0.02em',
          }}>
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', padding: '32px 42px 42px', color: '#333' }}>
          <div style={{ display: 'grid', gap: '26px' }}>
            <section>
              <h2 style={{
                margin: '0 0 12px',
                fontSize: '0.95rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#c22b6f',
              }}>
                Kontak
              </h2>
              <div style={{ display: 'grid', gap: '10px', fontSize: '0.96rem' }}>
                <div>Jl. Pegangsaan Timur No.39, Menteng, Jakarta Pusat</div>
                <div>0895 3151 8963</div>
                <div>henirahayuu2023@gmail.com</div>
                <div>linkedin.com/in/henirahayu</div>
                <div>@heniirahayuu</div>
              </div>
            </section>

            <section>
              <h2 style={{
                margin: '0 0 12px',
                fontSize: '0.95rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#c22b6f',
              }}>
                Skill
              </h2>
              <div style={{ display: 'grid', gap: '10px', fontSize: '0.96rem' }}>
                <div style={{ padding: '12px 14px', background: '#fff0f6', borderRadius: '16px', color: '#7d5272', fontWeight: 600 }}>HTML</div>
                <div style={{ padding: '12px 14px', background: '#fff0f6', borderRadius: '16px', color: '#7d5272', fontWeight: 600 }}>CSS</div>
                <div style={{ padding: '12px 14px', background: '#fff0f6', borderRadius: '16px', color: '#7d5272', fontWeight: 600 }}>JavaScript</div>
                <div style={{ padding: '12px 14px', background: '#fff0f6', borderRadius: '16px', color: '#7d5272', fontWeight: 600 }}>React</div>
                <div style={{ padding: '12px 14px', background: '#fff0f6', borderRadius: '16px', color: '#7d5272', fontWeight: 600 }}>Git</div>
              </div>
            </section>
          </div>

          <div style={{ display: 'grid', gap: '26px' }}>
            <section>
              <h2 style={{
                margin: '0 0 12px',
                fontSize: '0.95rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#c22b6f',
              }}>
                Pendidikan
              </h2>
              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ padding: '18px 20px', borderRadius: '20px', background: '#fff5fb', border: '1px solid #f2c5df' }}>
                  <div style={{ fontWeight: 700, color: '#5a1d45' }}>Universitas Bina Nusantara</div>
                  <div style={{ marginTop: '6px', color: '#84516b' }}>2024 - Present</div>
                </div>
                <div style={{ padding: '18px 20px', borderRadius: '20px', background: '#fff5fb', border: '1px solid #f2c5df' }}>
                  <div style={{ fontWeight: 700, color: '#5a1d45' }}>SMK STM Turen</div>
                  <div style={{ marginTop: '6px', color: '#84516b' }}>2018 - 2021</div>
                </div>
              </div>
            </section>

            <section>
              <h2 style={{
                margin: '0 0 12px',
                fontSize: '0.95rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#c22b6f',
              }}>
                Hobi
              </h2>
              <p style={{ margin: 0, fontSize: '0.96rem', textAlign: 'justify', color: '#4d3b4f' }}>Olahraga dan membaca buku menjadi aktivitas penting untuk menjaga keseimbangan energi dan kreativitas.</p>
            </section>
          </div>
        </div>

        <div style={{ padding: '0 42px 38px', color: '#4d3b4f' }}>
          <section>
            <h2 style={{
              margin: '0 0 14px',
              fontSize: '0.95rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#c22b6f',
            }}>
              Profil Singkat
            </h2>
            <p style={{ margin: 0, fontSize: '0.98rem', lineHeight: 1.8, textAlign: 'justify' }}>
              Mahasiswa aktif dengan fokus pada pembelajaran teknologi dan pengembangan diri. Saya menyukai tampilan yang rapi dan profesional, serta selalu berusaha menghasilkan karya yang elegan dan berkelas. Dengan latar belakang pendidikan yang kuat dan minat terhadap programming, saya berkomitmen untuk terus memperluas kemampuan sambil menjaga detail dan estetika dalam setiap pekerjaan.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Index