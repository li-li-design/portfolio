export default /*glsl*/`
precision mediump float;
uniform float iTime;
uniform vec2 iResolution;

float custom_tanh(float x) {
    float e1 = exp(2.0 * x);
    return (e1 - 1.0) / (e1 + 1.0);
}

void main() {
    vec2 u = gl_FragCoord.xy;
    vec2 v = iResolution.xy;
    u = 0.2 * (u + u - v) / v.y;

    vec4 z = vec4(1.0, 2.0, 3.0, 0.0);
    vec4 o = z;

    float a = 0.8;
    float t = iTime;
    for (float i = 1.0; i < 7.0; i += 1.0) {
        o += (1.0 + cos(z + t)) / length((1.0 + i * dot(v, v)) * sin(1.5 * u / (0.5 - dot(u, u)) - 9.0 * u.yx + t));

        // Simplified rotation
        float angle = i + 0.02 * t;
        mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        u = u * rotation;

        v = cos(++t - 7.0 * u * pow(a += 0.03, i)) - 5.0 * u;

        float dotProduct = dot(u, u); // Ensure we pass a scalar value to custom_tanh
        float tanhResult = custom_tanh(float(40.0 * dotProduct * cos(1e2 * u.yx + t) / 2e2));

        u += tanhResult + 0.2 * a * u + cos(4.0 / exp(dot(o, o) / 1e2) + t) / 3e2;
    }

    // Darker background color changing over time
    vec3 backgroundColor = vec3(
        0.2 + 0.2 * sin(iTime * 0.1),  // Darker red
        0.2 + 0.2 * sin(iTime * 0.2 + 1.0),  // Darker green
        0.2 + 0.2 * sin(iTime * 0.3 + 2.0)   // Darker blue
    );

    o = 25.6 / (min(o, 13.0) + 164.0 / o) - dot(u, u) / 250.0;

    gl_FragColor = vec4(backgroundColor, 1.0) + o;
}


`;