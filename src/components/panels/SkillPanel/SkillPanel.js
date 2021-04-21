import React from 'react';
import Tabs from '../../Tabs/Tabs';
import Grid from '../../Grid/Grid';
import './SkillPanel.css';

export default class WorkPanel extends React.Component {

    state = {
        langauges: [
            {
                name: "JavaScript",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
                value: 90,
                perks: [
                    "React",
                    "Deno",
                    "Vue.js",
                    "Node.js"
                ]
            },
            {
                name: "CSS",
                image: "https://ucarecdn.com/f49e8fc4-876f-49ef-934f-89812fc4125e/",
                value: 70,
                perks: [
                    "Less",
                    "Scss"
                ]
            },
            {
                name: "PHP",
                image: "https://lh3.googleusercontent.com/proxy/Ym9A3D6E7YvBxISuInOUg0cHfP5wzrb6ksiYW1nzNSF_us9KLjawDGCwX4FlTYMo4akJfkfp74zhRV8Y5pW5tbQI2lEKuhSGOAJfvJNBVfo3FKcopNbLmC7fTapd7ILXY7vXmx5mWMn5FhtH",
                value: 65,
                perks: [
                    "Lumen"
                ]
            },
            {
                name: "TypeScript",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
                value: 75,
                perks: []
            },
            {
                name: "Html",
                image: "https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png",
                value: 95,
                perks: []
            },
            {
                name: "C#",
                image: "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
                value: 70,
                perks: []
            },
            {
                name: "Java",
                image: "data:image/png;base64,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",
                value: 45,
                perks: []
            },
            {
                name: "Lua",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1200px-Lua-Logo.svg.png",
                value: 35,
                perks: []
            },
            {
                name: "Python",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
                value: 30,
                perks: []
            }
        ],
        databases: [
            {
                name: "MySQL",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8AYYoAXogAV4QAW4YAWYUAVIIAWoUAV4MAYov6/f4AUoHu9PfC1d/y9/nh6/CwyNXQ3+cudZiYt8ja5uxUiqejv85Jg6LE1+CqxNI9fJ1/prt0nraLr8JfkawTZ45ol7AcbJIASnyGqr64ztoxcZRejakSb5RBgKBilrBxmbJShaNHfp6StMZlkKotcJQWJh6SAAANHUlEQVR4nO1dZ3ubOhSONbCNCZjhPTANTdO0vv7//+7aaAEGx+NIIn76fqxT0EHS2ePl5R/+4R+6A2/xuUwRypbrOPRtL0YDvDXCBPV6PYQIdYbv08D2ioCR92ivDILRbOzaXhUgFg7q1YEwWj3NRs6dM/oK9J1daHttIHDTZgJPp5W+PwONG3kH0flhJXT77c+qj8TFS39mQ9yvU4lGq2/Oc8aYbVaU+y9uMH9b4n6NRpqNbS/yIWxJsVNLuVHJqoerG4nw7BsfVTcqiMB5+R8X0YBUryPJ2x7QeXhpocpkNU1tPqFVGp3Yzvoeh5fWDqlAuMMVGp21jeUBoGUPTwh+j8r3kX545pcHADcqqBgkTT8mf8o8B9FNPg8D33W/l/hgvLS/av51Hg1K29jH2HFGdPgrmr2vxsE3IXTKVJphy3LdPW1Qy48gmB52i8at7xgCRiFu5ZVBRM9IFEIE03Q77vz1/GB7RNvP3A63kXjcToJHUdxtheCVGU/9C9Jg02JfSRbkdNtgjvgmztv/ZDw6v4xVIgdZh1UCbgE3ykSBZIkppkfDo5VSRNPuKui/GSvpby/90Wscx2+To4GFsIOPxJIzWpHz0VV7ORiyJeL9l3/qekEQJGE+3XxGGJ/ZknjVUU/kgnMS/HrDf3K9xWxUJ5KmC22rfAg7dk4RupHt+4slrXoFjke1k6KDa6c9FN3M9JNVOqhsIyH7LkqOhG8E3d3+f/04q6oEOOoix+Hump5z1z0aZ5ULiegb9PoAIPQWep8yPY4qNOJDB7dxxkz6BnP/KriLtHxW0RWixzT8jGtvLabi1w/YVPweHXTQhdxKGl1QUC/D21Z8ArhzsjFmxwwN71dMXqPyUXV2XVNxJuyU9Xf3P8Ldl7eRRh1zAvjcdLhJe6sjKW8jolOw1YFgzs9p9pBWEpeDWM6uWxoOD7XhTeOvQb5f//f+tRiobCNddsqRIxRU2riqzQ9KCBlMvlyyuyoFzknaKemfjBizafbaMPpJ7+slz4cl2Ug7JTbe2DkljfsUiCV/TaI3K51Up0t6qlsEMtr8p3NuSH5c8aRNmcQd6CIfw7RYWJulyG0Q55qr9VoSjfSjOyzVPaBLMpHtDMqueVTwS7nLyaE7LJVJDLJr+XlWfIAfV22JP1EnlaSd0cS5Bo5adMqwMCRHVz5sPVL6TdoZFY7zmjYWX2zir2sftlcRAXSFlDGD3+Qiv3zFNxmRecl3fIWUMQLOL0dtps8SXcdLOeZK9iPUDRIDdndaj2k+oBcDAHWEahdRrxt3kSlnaNb2exrdZtkmaYnETnDUmIuxNgk2v9V0DzJF4rALJAbsImK4RKigtItZF0Q/k+qtQv8OBENJIrnTXwmKBdvEFNCRVNpFOoF77L3wWETxIX9NHYmKH+MOZJAxrxsBXUmotJsO5AHm7JgOQR/6qtRwQCZ2J1x2opy73d+NWEgSEbIu+XeMm94bw2iBMvsfdFgCgKegwB5TmfZxRN86Q2XyawDJTU9YKoZqO/z2VqTsox3wYz2lv2HYS34zEs5NoVWsUNlSqWX1jeUsYvDIylT6Ncg1PkmNWHCvIviD15LbWL6KfgqvuRVwFbfp2zX5V8W3vsq9fRtEbOCuDCVIeOzCjOC/s9JtqF0dfMucGUv4J+/kVbw/LQICiaNLS3YzeU5Tq+eU17VpuCyqMvdSfrl+JEw6DzQw9ZUSGeDM+hZ88nApvHtMhNO/yC/XjoDnumlQPkLFT4FNtNvAY946vA5KtRnZtIZd7gTUwU+l802DZngDuMOmR+D5QS7PKbx6fwt4rhui8CROhCGFrNpRAXdzIgyuvSXSVLTLbMZCOIMbwyWhSK2Ga95EBji49uEqR79dDVwkuSPwTZwqZmM311ZkLMKzPKnZ0OZsSGNgjRcovNzPRb2NZRuDB4V15PvOxCZiu9WLk4uJYI9gLm4i+gP/8JuXgXXIZemWwja1U9HhRcezRcFVz2atFOsO0utrWYIrpD6CjgLdAO5ygFfbCqyF7mYxasrEITro4efSFNZhZ1+J94IZtDUHeRTKn4GtKac8G1OXB162U9P1Db8ES+TTZ4gH0taHzN+5BeOBJpVNYCJIHFiqy2DMztFnhkt3hi2HTZEfhd41vkFGvh0r3uFwoF1YyVhUe0qrTvBkU52+IuVYtOI6LewbpDf7ZS8EBmTC57VgSinVG3HnuZCnT2le6rP6Em3inkN63SxYGOwawnsSq7Ap9T8LaahdUCkLw3jq6d/T1yW/db8mGMlNNOySYlk1GlU2gZ3YRMewS8orrN+BfuM0kZH9q0ob4cCcULeUOd2LrVTdzNr6TKFyDEipUDpstHi8WsG0jZGJ2y/DiRpClRfAAvnYxKssOYc/i9thxtH3IW+iyZTFwv5GV9fEPgSZKGV0E4vvasr2ll43x6ARVYQVTHE36eHXbKxVEF2kcAWrzbkHIfV12zIlRJck1CsGtsljaQmb28Towj30eghYYfWH5jdx2c5LT+546FjDqm98Ez/a5WGRytzWW+JOBFL/NiYTeXy74RfW3Q26fdC7zAQzFYliJn5Dnw9eNQQtSEJZUWPKscj00gbbQrg4gYswVXKGKZm4b3G1xSIRhtzUQOJrqJzMO/uM3gpmH57lmfiq9hw6rilVN/IJ++AWMJPmLFdooXoHQ3s4peqmI4G+AYx9n5Wty9vSwmgfgYxEmYkJMy2jzjGDcg9P6IQ+lbDY3PkPGKyUru7EnJZHXoDbVrKFhpk4DROIpMrX3itdyqFjiwuzig1T9wdVN211FhR0XLNUT2OiPpEl9FRZTVKb6AFtCJTqFAwwGx7aq3xMVSHJfgQ3BGYqi9/AdEJe011+kQwUUd7HC7rONCh1Ixx9LDQH3JjeVjF1hdvvaDey6iXwDINNaRoBGpC1VgWOXcSKRJTv/vPi8eRa6GLXqMKtKdnq5KrsJSVjxhOH9MR/1v2zDwCBpDZkiuClvoDNqiCoVLgjYygnGRJoKm6b4iqJPeQMY006juh+JLmp7BVU2Dd8E8El15jUZ4UhPNQ0o5ipwqpcYCFeXZSc8TpT+Cb63up8Vg9FOx1Mh6k16qqJ1BCukPJiUAT/Ynca0TqRxNEgIb3aUK8t5zTcz8B7L+ip60n2f0mNSILfwAUkF3oiIvRXDKVZlX/WlvoWTN/xoCo8Mmi+JiYIMl+G+1NQyK8etxY1Vtj5iyWuGGwYeq4E30Q2+MITg7yl94ZfTK2e+GBzoKVutv0e7DZyzYVp2DJDSzrDeNtH3dmh4TpVVxIBjwfZ84M48Uu2kxoKyY0N7Xkifj4ZKbMjA1UVuZ5IhlNXuDDKXctFxbd+gzVQs2wQaLt+0aILUXnly53OeMslIzXZoZqegZeAsjE+G0ZaqYnkuiox4ad2Y8lyyBAwC25bnypfLU6OmWPVTCp6sJQRf8heqMuqJlxvnbMujFbHUAMItY00AtM0/AqJ522rJ8zIMNQAIvmQRdJDsCyx8qQDdC4Z3OjEjYjO0pMKNjLpFjDPfo/ZxEpEm3qd+IcTieYKJcNMHCq8BRNT3upAHIyiTaM+UTS2NNioxN0J2djP4Ji4m4RhqxAqSHxkqNmtyEWDaYQMpWx6GTFb0CtHEkGn9rS/8XQXjbbxiClXt0x1CT/JFGI0BTZ457cRf5j5su5RphguC8lTrjMeDFVNrR1kRD9V8HdszhsyNY8oxsR0u+6cG+G6C7TU+7Dpdt1exILVppLFguiH6R7B/pJFH0x1nHK3P0y31PHSmm9eNzYa2vM2wPV9j8FnISQzVniBWG8tUZCM9+v/ZstDOkSIUuVqNDiUINbSlOiEcDo5DDGmhCBUD94YHUqw12EOe+PJkbYGwhRG5hSOPbQl5ef1GMYZUN9JDfbXmEKO6PLydYbJRfIIdpZvodFi6RAschpse5i0bR/qIUIHDtouzPcJdbcwlyIcNVN3pAzTYRZN1vGrrR5FCchn3daj+gV1Dlp+xvMk6NoM93sQOmd7N8pWeRdmuEFhW+IxfUzS34suDOGDxLy0ifv5s1F3gso61d1pxRoWJY/7M27hS6knWA8dbK9FDzwlMPoT20PN9GCsmE1/9kxyQmGlEmvJsBujhaGhEsB7aGS5fbQe+IeSdjpYPuM2er0SiYiunpDhBFnZQqSQuRhdgfdRzntBzsz6vE94rCpmBqGrZ7CdqshJxZdBU6sDlbTAW1YytNBo93wcZ1VNQqPR893G17SShYaIpQ69GiGiogKO1Vk1evCaVbxT+AntDTdGZRr7cDl83YG3Kufwk+wZbX/vDVFl+/eeURd/8eNMBmsQekoSX/xppsTj8wnGAm7+iydGGUupMY98SXnW0BNyVI6clSkQu2OUtcLdF3mKFLgpUKfA0k0tTzTXjOkpTmx5AJhmJKeiiecm0V2PrI5WMoExIk++iy/B8aQ++S6eTip9PhdcBWNsfgaBYcxJansJujE3PYPAPIL1k9/Ef/iHb4L/AZ3RkQPuySzuAAAAAElFTkSuQmCC",
                value: 75,
                perks: []
            },
            {
                name: "MongoDB",
                image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
                value: 65,
                perks: []
            }
        ],
        other: [
            {
                name: "Windows",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/600px-Windows_logo_-_2012.svg.png",
                value: 90,
                perks: []
            },
            {
                name: "Linux",
                image: "https://i.pinimg.com/originals/c7/b8/11/c7b8113247fecd83bd9b5ed5bd3f34d5.png",
                value: 80,
                perks: []
            }
        ],
        projects: [
            {
                name: <a href="https://github.com/Aruinerk/CVHost" target="_blank" rel="noreferrer">CVHost</a>,
                image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                progress: 80,
                perks: [],
                description: [
                    "This is a tiny project supposed to show off some code by creating a CV."
                ]
            }
        ]
    }

    render() {
        return (
            <div className="AppPanel SkillPanel">
                <Tabs>
                    <Tabs.Tab name="Skills" icon="bi-asterisk">
                        <h2><i class="bi bi-code-slash"></i> Programming</h2>
                        <hr />
                        <Grid>
                            {this.state.langauges.map((lang, index) => (
                                <Grid.Item 
                                    key={index} 
                                    name={lang.name} 
                                    image={lang.image} 
                                    value={lang.value} 
                                    perks={lang.perks} 
                                />
                            ))}
                        </Grid>
                        <h2><i class="bi bi-server"></i> Databases</h2>
                        <hr />
                        <Grid>
                            {this.state.databases.map((lang, index) => (
                                <Grid.Item 
                                    key={index} 
                                    name={lang.name} 
                                    image={lang.image} 
                                    value={lang.value} 
                                    perks={lang.perks} 
                                />
                            ))}
                        </Grid>
                        <h2><i class="bi bi-gem"></i> Other</h2>
                        <hr />
                        <Grid>
                            {this.state.other.map((lang, index) => (
                                <Grid.Item 
                                    key={index} 
                                    name={lang.name} 
                                    image={lang.image} 
                                    value={lang.value} 
                                    perks={lang.perks} 
                                />
                            ))}
                        </Grid>
                    </Tabs.Tab>
                    <Tabs.Tab name="Projects" icon="bi-kanban">
                        <Grid>
                            {this.state.projects.map((project, index) => (
                                <Grid.Item 
                                    key={index} 
                                    name={project.name} 
                                    image={project.image} 
                                    value={project.progress} 
                                    perks={project.perks} 
                                    description={project.description} 
                                />
                            ))}
                        </Grid>
                    </Tabs.Tab>
                </Tabs>
            </div>
        );
    }
}